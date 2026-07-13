"use client";

import Link from "next/link";
import { useIPMUser} from "@/lib/useIPMUser";
import { useEffect ,useState} from "react";
import { jwtDecode } from "jwt-decode";
import PackageCardUser from "./packagecarduser";
import Image from "next/image";





export default function IPMPage() {
  

  const { uploads, loading } = useIPMUser();
  const [wallet,setWallet]=useState("");



  useEffect(()=>{

    const vjwt = localStorage.getItem("vjwt");
    const vjwtobj = jwtDecode(vjwt)
    setWallet(vjwtobj.sub)

  },[])
   
  //if (loading) return <div className="bg-black-500">Loading…</div>;
   if (loading) return  ( <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin h-8 w-8 rounded-full border-4 border-white border-t-transparent" />
      <span className="ml-3 text-white">Loading IPM Packages</span>
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
                <span className={`text-xl font-medium ${theme.textSecondary}`}>— IPM Packages</span>
            </Link>
            
            <nav className="flex items-center space-x-6">
                 <a  href="/docs" className={navLinkClasses}>Docs</a>
            </nav>
        </header>



        {/* Folder Grid */}
       

        
        {/* Folder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uploads.map((p,i) => (


              <div className="flex items-center justify-between"key={i}>
                <div>
                  <h2
                    className={`text-lg font-sans uppercase ${theme.textPrimary} group-hover:${theme.accent}`}
                  >
                    {p.package}
                  </h2>
                  <PackageCardUser data={p} user={wallet}/>
                  
                </div>

                
                
              </div>
            
            
          ))}
        </div>



        
            
        </div>

        {/* Empty state */}
        {uploads.length === 0 && (
          <div className={`mt-20 text-center ${theme.textSecondary}`}>
            Nothing found 
          </div>
        )}
      </div>

  );
}
