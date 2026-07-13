import { provideClient } from "../../../../lib/dbconnection"
import { NextResponse } from 'next/server';





async function getPackages(pkg){


    const client=provideClient()
    const db = client.db("ihub_db");
    const coll = db.collection("ipm_protocol");
    const doc = await coll.findOne({"foldername":pkg});
    
    if(!doc) {
        return { pkg: null };
    }
    let payload=null

    if(doc) {

        payload ={
            "package":doc.foldername,
            "name":doc.metadata.name,
            "description":doc.metadata.description,
            "version":doc.metadata.version,
            "author":doc.metadata.author,
            "readme":doc.metadata.readme
     }
     

     }
     return payload
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
    let pkg=await getPackages(ps.package)
    
  return NextResponse.json(

      {"pkg":pkg},
      {headers:CORS_HEADERS}
    );

   
}