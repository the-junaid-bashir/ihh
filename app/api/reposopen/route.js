import { provideClient } from "../../../lib/dbconnection.js"
import { NextRequest, NextResponse } from 'next/server';


const client=provideClient()
const db = client.db("ihub_db");
const coll = db.collection("ihub_col");




async function getFiles(folder) {

    const doc = await coll.findOne({
        "owner": "system"
    });
    let uploads=null
     if(doc) {

        
        let manifests=doc.manifests
    

    for(let obj of  manifests){
        
        let dbfolder=String(obj.folder)

          if(dbfolder==folder){
              console.log(obj.folder)
              uploads=obj.uploads
           }
          }}


   
    const fetchPromises = uploads.map(obj => {
    const url = `https://coral-petite-bandicoot-821.mypinata.cloud/ipfs/${obj.cid}`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${obj.name} (CID: ${obj.cid}): ${response.status}`);
        }
        return response.text();
      })
      .then(content => {
        return { 
          name: obj.name, 
          cid: obj.cid,
          content: content 
        };
      })
      .catch(error => {
        console.error(`Error processing file ${obj.name}:`, error);
        return { 
          name: obj.name, 
          cid:obj.cid,
          content: `ERROR: Could not fetch file content. Details: ${error.message}` 
        };
      });
  });

const structuredResultsArray = await Promise.all(fetchPromises);
  
return structuredResultsArray;

}


async function getFolders(){

    const doc = await coll.findOne({
        "owner": "system",
    });
    let folders=[]
    let uploads=[]

    if(!doc) {
        return { uploads: [{folder:"No Repos",data:[]}] };
    }

    if(doc) {

        let manifests=doc.manifests

         for(let obj of  manifests){
        
      
          if(obj.is_latest==true){
              console.log(obj.folder)
              folders.push(obj.folder)
          }

        }



const uploads = await Promise.all(
  folders.map(async (fname) => {
    const data = await getFiles(fname)
    return { folder: fname, data }
  })
);




   
   return {uploads}

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




export  async function GET(request) {

    //let ps=await params
  let dataobj=await getFolders()
  return NextResponse.json(

      dataobj,
      {headers:CORS_HEADERS}
    );

    


    
}