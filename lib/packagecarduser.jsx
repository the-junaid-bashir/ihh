"use client";

import React from "react";
import { Terminal, Shield, Cpu, ArrowRight, CheckCircle2, Copy, Box } from "lucide-react";

const PackageCardUser = ({ data, user }) => {
  if (!data?.package) {
    return (
      <div className="p-4 border-2 border-dashed border-red-500/30 bg-red-500/5 rounded-lg font-mono text-xs text-red-400 flex items-center gap-3">
        <div className="h-2 w-2 bg-red-500 animate-pulse rounded-full" />
        <span>SYSTEM_ERROR: NULL_MANIFEST_POINTER</span>
      </div>
    );
  }

  return (
    <div className="group relative max-w-[500px] transition-all duration-500">
      {/* Background Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
      
      <div className="relative bg-[#0a0a0c] border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl">
        
        {/* Header Section */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg">
              <Box size={16} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Registry Path</span>
              <span className="text-xs text-zinc-200 font-mono">
                {data.author} <span className="text-blue-500">/</span> {data.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
            <CheckCircle2 size={10} className="text-emerald-500" />
            <span className="text-[9px] text-emerald-500 font-black uppercase tracking-tighter">Verified</span>
          </div>
        </div>

        {/* Main Info */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-5xl font-black text-white tracking-tighter italic transition-transform group-hover:-translate-y-1">
                {data.package}
              </h3>
              <div className="flex items-center gap-3 mt-3">
                <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] font-bold rounded flex items-center gap-1">
                  v{data.version}
                </span>
                <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
                  Released 2 days ago
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed font-light mb-8 line-clamp-2">
            {data.description || "The definitive protocol for decentralized package management and secure distribution."}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg group/item hover:border-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Cpu size={12} className="text-blue-400" />
              
              </div>
             
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-lg group/item hover:border-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Shield size={12} className="text-emerald-400" />
               
              </div>
              
            </div>
          </div>
        </div>

        {/* Dynamic Command Footer */}
        <div className="group/footer relative p-1 mt-2">
          <div className="flex items-center bg-black/40 backdrop-blur-md rounded-lg border border-white/5 overflow-hidden">
            <div className="flex-1 px-5 py-4 font-mono text-[11px] flex items-center justify-between group-hover/footer:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-blue-500 select-none opacity-50 font-bold">{">"}</span>
                <span className="text-zinc-300">ipm op install {data.package}</span>
              </div>
              <Copy size={14} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            </div>
            
            <button className="h-full bg-white text-black px-6 py-4 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:px-8">
              <span className="text-[10px] font-black uppercase tracking-widest">Details</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCardUser;