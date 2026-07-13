
import {NextResponse} from "next/server"
import PromptComparison from "../../../lib/promptcomp";


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




export async function POST(request) {
  try {
    const body = await request.json();
    
    // Ensure PromptComparison is awaited if it's async
    const comparison = await PromptComparison(body.prompt);

    // FIX: Body is 1st arg, Options (headers) are 2nd arg
    return NextResponse.json(
      { response: comparison }, 
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}