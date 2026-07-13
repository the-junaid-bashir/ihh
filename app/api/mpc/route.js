import { provideClient } from "../../../lib/dbconnection.js"
import { NextRequest, NextResponse } from 'next/server';


//const client=provideClient()
//const db = client.db("ihub_db");
//const coll = db.collection("mcp_registry");

async function getFiles(coll,folder) {

    const doc = await coll.findOne({
         "owner": "system",
    });
    
    let uploads=[]
     if(doc) {
        //console.log(doc)
           uploads = doc.manifests
            .filter(m => m.folder === folder && m.is_latest === true)
            .flatMap(m => m.uploads);
    }
     
           

  
   
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


async function getFolders(coll){

    const doc = await coll.findOne({

        "owner": "system",
       // "manifests.id": targetManifestId 
  
    });

    let folders=[]
    if(!doc) {
        return { uploads: [{folder:"No Repos",data:[]}] };
    }

    if(doc) {

        let manifests=doc.manifests

         for(let obj of  manifests){
            //console.log(obj.folder)
            folders.push(obj.folder)
          }

    }



const uploads = await Promise.all(
  folders.map(async (fname) => {
    const data = await getFiles(coll,fname)
    return { folder: fname, data }
  })
);




   
   return {uploads}

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




export  async function GET() { //{params}

    //let ps=await params

    const client = provideClient(); // Ensure this returns a promise or connected client
    const db = client.db("ihub_db");
    const coll = db.collection("mcp_registry");
    let dataobj=await getFolders(coll)//ps.wallet
  return NextResponse.json(

      dataobj,
      {headers:CORS_HEADERS}
    );

   
}