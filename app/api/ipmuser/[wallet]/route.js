import { provideClient } from "../../../../lib/dbconnection.js"
import { NextResponse } from 'next/server';





async function getPackages(id){


    const client=provideClient()
    const db = client.db("ihub_db");
    const coll = db.collection("ipm_protocol");
    const docs = await coll.find({"id":id}).toArray();
    let pkgs=[]
    if(!docs) {
        return { pkgs: [] };
    }

    if(docs) {

     for(let doc of docs){

        let payload ={
        "package":doc.foldername,
        "name":doc.metadata.name,
        "description":doc.metadata.description,
        "version":doc.metadata.version,
        "author":doc.metadata.author
     }
     pkgs.push(payload)

     }
     return pkgs
    }




}

const CORS_HEADERS={
  
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    'Access-Control-Allow-Headers': '*', 
    'Access-Control-Allow-Credentials': 'false', 
};


export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: CORS_HEADERS
  });
}




export  async function GET(request,{params}) { 


    let ps=await params
    let pkgs=await getPackages(ps.wallet)
    
  return NextResponse.json(

      {"uploads":pkgs},
      {headers:CORS_HEADERS}
    );

   
}