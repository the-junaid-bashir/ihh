"use client";

import { use } from "react";
import Link from "next/link";
import { useMpcData } from "@/lib/useMpcData";
import { ChevronLeft, FileCode, Copy, Hash, Clock, Globe } from "lucide-react";

export default function FilePage({ params }) {
  const { folder, cid } = use(params);
  const { uploads, loading } = useMpcData();

  const decoded = decodeURIComponent(folder);

  const file = uploads
    ?.find(f => f.folder === decoded)
    ?.data?.find(d => d.cid === cid);

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-[#050505]">
      <div className="animate-spin h-6 w-6 border-2 border-[#A359FF] border-t-transparent rounded-full" />
    </div>
  );

  if (!file) return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#050505] text-zinc-500">
      <p className="mb-4">File not found in the decentralized registry.</p>
      <Link href="/" className="text-zinc-200 hover:text-white underline text-sm">Return Home</Link>
    </div>
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(file.content);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#A359FF]/30">
      {/* Top Header */}
      <nav className="border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href={`/mcp/${folder}`} 
              className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              <ChevronLeft className="w-4 h-4 text-zinc-400" />
            </Link>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 font-mono leading-none mb-1 uppercase tracking-widest">{decoded}</span>
              <h1 className="text-sm font-semibold text-white leading-none">{file.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <button 
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs font-medium transition-all text-zinc-300 hover:text-white"
             >
                <Copy className="w-3.5 h-3.5" />
                Copy
             </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1">
                <Hash className="w-3 h-3" /> Content ID
              </div>
              <p className="text-xs font-mono text-zinc-300 truncate">{cid}</p>
           </div>
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1">
                <Globe className="w-3 h-3" /> Storage
              </div>
              <p className="text-xs font-mono text-zinc-300">ImmutableHub Node</p>
           </div>
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1">
                <FileCode className="w-3 h-3" /> Type
              </div>
              <p className="text-xs font-mono text-zinc-300">Plain Text / Content</p>
           </div>
        </div>

        {/* Content Area */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-[#A359FF]/10 to-transparent rounded-[13px] opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative bg-[#0d0d0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Window Controls Decor */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
               <span className="ml-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Read Only</span>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm md:text-base leading-relaxed font-mono text-zinc-400 whitespace-pre-wrap">
                <code>{file.content}</code>
              </pre>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center">
            <p className="text-[11px] text-zinc-600 font-mono tracking-tighter">
                MCP server
            </p>
        </footer>
      </main>
    </div>
  );
}