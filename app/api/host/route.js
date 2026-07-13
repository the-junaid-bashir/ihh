import {createRepo,uploadFiles,commit} from "@huggingface/hub"
import { NextResponse } from "next/server";
import { provideClient } from "../../../lib/dbconnection.js"



const client=provideClient()
const db = client.db("ihub_db");
const coll = db.collection("hosted");



const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Credentials': 'false',
};

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: CORS_HEADERS });
}




async function ensureSpaceExists(name,Token) {
  try {
    await createRepo({
      repo: { type: "space", name: name },
      accessToken: Token,
      sdk: "docker", // Required for Spaces
    });
    return true

  } catch (error) {
    // Check if the error is specifically because it already exists
    if (error.status !== 409) {
      return ;
    }
  }
}



export async function POST(req) {

  let body=await req.json()
  let folder=body.folder
  let uid=body.uid



  const TT = process.env.HFT
  const spaceName = `immutablehub/${folder}_${uid}`;

  if (!TT) {
    return NextResponse.json({ error:"Token missing" }, { status: 500 });
  }

  const files = [
    {
      path: "Dockerfile",
      content: `
        #Use a slim Node.js image for faster builds
        FROM node:18-slim

        #Create and define the working directory
        WORKDIR /app
    
        #Copy package.json and package-lock.json first for better caching
        COPY package*.json ./
        
        #Install dependencies
        RUN npm install

        #Copy the rest of your application code
        COPY . .

        #Hugging Face Spaces require port 7860
        EXPOSE 7860
        
        #Start the application
        CMD ["node", "server.js"]
      `.trim(),
    },
    {
      path: "README.md",
      content: `---
        title: Docker Space
        emoji: 🐳
        colorFrom: blue
        colorTo: blue
        sdk: docker
        pinned: false
    ---`.trim(),
    },
  ];

  try {
   
  //1. Create Repo with 'docker' SDK

    let exists=await ensureSpaceExists(spaceName,TT)

    if (exists==true){

    const res = await fetch(`http://localhost:3000/api/data/${uid}`);
    const json = await res.json();
        
    //IMPORTANT: Extract the array from the "uploads" key in your JSON
    const freshArray =json.uploads
    console.log(freshArray)
    for (let arrobj of  freshArray){
        if (arrobj.folder==folder){
            console.log("identified")
            let contents=arrobj.data
            const cleanedFiles = contents.filter(dataobj => {
                const isIgnored = dataobj.name === "package-lock.json" || dataobj.name.includes(".history.bundle");
                return !isIgnored
            });
            for (dataobj of cleanedFiles){
                 files.push({"path":dataobj.name,"content":dataobj.content})
            }
        }
    }


      
      await uploadFiles({
            repo: { type: "space", name: spaceName },
            accessToken: TT,
            files: files.map(f => ({
            path: f.path,
            content: new Blob([f.content])
      }))
      });
      

    }
    
   
    await coll.insertOne({"id":uid,"app":folder})

    return NextResponse.json({ ok: true, url: `https://huggingface.co/spaces/${spaceName}` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }





}