
import {NextResponse} from "next/server"
import CodeCheck from "../../../../lib/codecheck";


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



export async function POST(request){

    let body=await request.json()
   
    let check=CodeCheck(body.code)

   return NextResponse.json(
    {
    "response":check,
    headers:CORS_HEADERS
  
    }
  );
}