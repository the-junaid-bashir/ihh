"use client";

import Link from "next/link";
import { useMpcData } from "@/lib/useMpcData";
import { useEffect ,useState} from "react";
import { jwtDecode } from "jwt-decode";

// This line is the magic fix. 
// It tells Next.js to never render this component on the server.
//const SolanaPayQR = dynamic(() => import('../lib/sponsor'), { 
  //ssr: false,
  //loading: () => <div className="w-[360px] h-[360px] bg-gray-100 animate-pulse rounded-xl" />
//});


const MCPServerIcon = ({ size = 100, color = "white" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base Layer / Server Plate */}
    <path 
      d="M4 15L12 19L20 15" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M4 11L12 15L20 11" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeOpacity="0.6"
    />
    
    {/* Top Perspective Plate */}
    <path 
      d="M12 3L4 7L12 11L20 7L12 3Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* The "Processor" Core / Intelligence Node */}
    <rect x="10.5" y="5.5" width="3" height="3" rx="0.5" fill={color} className="animate-pulse" />
    
    {/* Connection Lines */}
    <path 
      d="M12 11V15" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeDasharray="2 2" 
    />
  </svg>
);




export default function MCPPage() {
  

  const { uploads, loading } = useMpcData();
  const [add,setAdd]=useState("");



  useEffect(()=>{

    const vjwt = localStorage.getItem("vjwt");
    const vjwtobj = jwtDecode(vjwt)
    setAdd(vjwtobj.sub)

  },[])
   
  //if (loading) return <div className="bg-black-500">Loading…</div>;
   if (loading) return  ( <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin h-8 w-8 rounded-full border-4 border-white border-t-transparent" />
      <span className="ml-3 text-white">Loading MCP Servers</span>
    </div>
  )
 



  const theme = {
    bg: "bg-gradient-to-br from-[#0a0a0d] via-[#0e0e14] to-[#050507]",
    //bg:"bg-darkgray-500",
    card: "bg-[#101014] border border-[#303036]",
    textPrimary: "text-white",
    textSecondary: "text-[#a0a0a9]",
    accent: "text-[#A359FF]",
    hover: "hover:bg-[#1c1c22]",
  };


  const navLinkClasses ="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1";
  return (
    <div className={`${theme.bg} min-h-screen px-6 py-20`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}

    
        <header className="flex justify-between items-center pb-8 border-b border-[#303036] mb-10">
            <Link href="/" className="text-3xl font-extrabold tracking-tight flex items-center gap-3">
                <span className={`text-white bg-clip-text`}>ImmutableHub</span>
                <span className={`text-xl font-medium ${theme.textSecondary}`}>— MCP servers</span>
            </Link>
            
            <nav className="flex items-center space-x-6">
                 <a  href="/docs" className={navLinkClasses}>Docs</a>
            </nav>
        </header>



        {/* Folder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uploads.map((f) => (


           
            <Link
              key={f.folder}
              href={`/mcp/${encodeURIComponent(f.folder)}`}
              className={`
                ${theme.card}
                ${theme.hover}
                rounded-xl p-6 transition-all duration-200
                group
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2
                    className={`text-lg font-sans uppercase ${theme.textPrimary} group-hover:${theme.accent}`}
                  >
                    {f.folder}
                  </h2>


                  <MCPServerIcon/>
                


                  <p className={`text-sm ${theme.textSecondary} mt-1`}>
                    {f.data?.length || 0} objects
                  </p>
                </div>

                <div
                  className={`text-2xl ${theme.accent} opacity-70 group-hover:opacity-100`}
                >
                  ⟶
                </div>
                
              </div>
            </Link>
            
          ))}
        </div>

        {/* Empty state */}
        {uploads.length === 0 && (
          <div className={`mt-20 text-center ${theme.textSecondary}`}>
            Nothing found 
          </div>
        )}
      </div>
    </div>
  );
}
