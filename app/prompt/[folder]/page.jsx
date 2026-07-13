"use client";

import { use } from "react";
import Link from "next/link";
import { usePromptData } from "@/lib/usePromptData";
// Optional: Install lucide-react for icons
import { Folder, FileText, ChevronLeft, ExternalLink } from "lucide-react";

export default function FolderDetail({ params }) {
  const { folder } = use(params);
  const { uploads, loading } = usePromptData();
  const decodedFolder = decodeURIComponent(folder);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a0b]">
      <div className="animate-spin h-10 w-10 rounded-full border-2 border-[#A359FF] border-t-transparent" />
      <p className="mt-4 text-sm font-medium text-zinc-500 animate-pulse">Accessing IPFS...</p>
    </div>
  );

  const found = uploads.find(f => f.folder === decodedFolder);
  const files = found?.data || [];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-[#A359FF]/30">
      {/* Top Navigation Bar */}
      <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-zinc-500">Root</span>
              <span className="text-zinc-700">/</span>
              <span className="text-white truncate max-w-[200px]">{decodedFolder}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="/dashboard" className="text-xs font-semibold px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-all">
                Dashboard
             </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                {decodedFolder}
              </h1>
              <p className="mt-2 text-zinc-500 flex items-center gap-2">
                <Folder className="w-4 h-4" />
                {files.length} {files.length === 1 ? 'Object' : 'Objects'} stored in this directory
              </p>
            </div>
          </div>
        </div>

        {/* Files Grid/List */}
        <div className="grid grid-cols-1 gap-3">
          {files.length > 0 ? (
            files.map((file) => (
              <Link
                key={file.cid}
                href={`/prompt/${encodeURIComponent(folder)}/${file.cid}`}
                className="group flex items-center justify-between p-4 bg-[#111113] border border-white/[0.03] rounded-xl hover:border-[#A359FF]/50 hover:bg-[#161618] transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg group-hover:bg-[#A359FF]/10 group-hover:text-[#A359FF] transition-colors">
                    <FileText className="w-5 h-5 opacity-70" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {file.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                       <span className="text-[10px] font-mono text-zinc-600 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        {file.cid.slice(0, 14)}...
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-medium text-zinc-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Content
                  </span>
                  <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-[#A359FF] transition-colors" />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-2xl">
              <Folder className="w-10 h-10 text-zinc-800 mx-auto mb-4" />
              <p className="text-zinc-500 font-medium">This repository is empty</p>
              <Link href="/" className="text-[#A359FF] text-sm mt-2 inline-block hover:underline">
                Go back home
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}