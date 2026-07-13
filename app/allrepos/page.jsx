"use client";

import Link from "next/link";
import { useRepoData } from "@/lib/useRepoData2";



const FolderRepoIcon = ({ size = 24, color = "white" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);



export default function FolderPage() {
  

  const { uploads, loading } = useRepoData();

   
  //if (loading) return <div className="bg-black-500">Loading…</div>;
   if (loading) return  ( <div className="flex items-center justify-center h-screen bg-black">
      <div className="animate-spin h-8 w-8 rounded-full border-4 border-white border-t-transparent" />
      <span className="ml-3 text-white">Loading repositories</span>
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
                <span className={`text-xl font-medium ${theme.textSecondary}`}>— Repos</span>
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
              href={`/folders2/${encodeURIComponent(f.folder)}`}
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
                  <p className={`text-sm ${theme.textSecondary} mt-1`}>
                    {f.data?.length || 0} objects
                  </p>
                </div>

                <div
                  className={`text-2xl ${theme.accent} opacity-70 group-hover:opacity-100`}
                >
                  ⟶
                </div>
                <FolderRepoIcon/>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {uploads.length === 0 && (
          <div className={`mt-20 text-center ${theme.textSecondary}`}>
            Loading ....
          </div>
        )}
      </div>
    </div>
  );
}
