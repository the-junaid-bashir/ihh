"use client";

import { Terminal, Shield, Cpu, ArrowRight, Zap, Boxes, Lock } from "lucide-react";

const PackageCard = ({ data}) => {
  
  if (!data?.name) return (
    <div className="p-4 border-2 border-dashed border-red-500/50 bg-red-500/5 font-mono text-[10px] text-red-500 uppercase animate-pulse">
      [!] critical_error: manifest_entry_null
    </div>
  );

  return (
    <div className="font-mono group">
      <div className="w-full max-w-[600px] bg-[#0a0a0a] border border-white/10 relative overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />

        {/* Top Metadata Rail */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900/80 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-blue-500 animate-pulse" />

            </div>
            <span className="text-[9px] text-zinc-700">ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 border border-zinc-800" />
            <div className="w-2 h-2 border border-zinc-800 bg-zinc-800" />
          </div>
        </div>

        <div className="p-6 relative">
          {/* Version Badge - Floating Style */}
          <div className="absolute top-6 right-6 flex flex-col items-end">
            <div className="bg-white/5 border border-white/10 px-2 py-1 backdrop-blur-md">
              <span className="text-[10px] text-blue-400 font-bold uppercase italic">v.{data.version}</span>
            </div>
            <span className="text-[8px] text-zinc-600 mt-1 font-black uppercase">Stable Build</span>
          </div>

          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Boxes size={14} className="text-blue-500" />
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                {data.author} <span className="text-zinc-800">::</span> {data.name}
              </span>
            </div>
            <h3 className="text-5xl font-black text-white tracking-tighter uppercase leading-none group-hover:tracking-normal transition-all duration-500">
              {data.name}<span className="text-blue-500 text-2xl">.</span>
            </h3>
          </div>

          {/* Description with "Line Number" Detail */}
          <div className="relative pl-6 mb-8 border-l border-white/5">
            <span className="absolute left-0 top-0 text-[9px] text-zinc-700 -ml-[1px]">01</span>
            <p className="text-[13px] text-zinc-400 leading-relaxed font-sans italic">
              {data.description}
            </p>
          </div>

      </div>

        {/* Action Bar - Terminal Style */}
        <div className="flex items-stretch bg-black border-t border-white/10 group/terminal">
          <div className="flex-1 p-4 flex items-center gap-3 overflow-hidden">
            <Terminal size={14} className="text-blue-500 shrink-0" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-zinc-700 text-[11px] font-bold">~$</span>
              <code className="text-[11px] text-zinc-300 font-mono">
                ihub op  clone <span className="text-white">{data.name}</span>
              </code>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 flex items-center gap-3 transition-all relative overflow-hidden">
    
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">
              <a href={`/ipmpage/${data.name}`}>Details</a>
              </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default PackageCard;