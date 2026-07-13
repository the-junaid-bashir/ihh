import { provideClient } from "../../../lib/dbconnection.js"
import { NextResponse } from 'next/server';





async function getHostedStatus(uid,folder){


    const client=provideClient()
    const db = client.db("ihub_db");
    const coll = db.collection("hosted");
    const doc = await coll.findOne({"id":uid ,"app":folder})
    
    if(!doc) {
        return false
    }
    else{
        return true
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

    const { searchParams } = new URL(request.url);
    const uid = searchParams.get('uid');
    const folder = searchParams.get('folder');
    let hostedstatus=await getHostedStatus(uid,folder)
    
  return NextResponse.json(

      {"hosted":hostedstatus},
      {headers:CORS_HEADERS}
    );

   
}