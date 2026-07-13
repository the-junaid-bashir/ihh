"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Globe, 
  Activity,
  Command,
  Hash,
  ArrowUpRight
} from "lucide-react";
import Header2 from "../../lib/header2";
import SearchTerminal from "../../lib/search";

export default function RegistryPackageView() {
  const [activeTab, setActiveTab] = useState("registry");

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono selection:bg-blue-500/30">
      <Header2 />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.1]" 
        style={{ 
          backgroundImage: `radial-gradient(#444 1px, transparent 1px)`, 
          backgroundSize: '24px 24px' 
        }}
      />

      {/* Main Content: Reduced Top Padding */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* Compact Hero: Flex Layout to save vertical space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-white/5">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Registry<span className="text-zinc-700">.</span>Explorer
            </h1>
            <p className="text-zinc-500 text-xs font-sans uppercase tracking-widest">
              Decentralized Package Resolution Protocol
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-6 mt-4 md:mt-0">
             <div className="text-right">
                <p className="text-[9px] text-zinc-600 uppercase font-bold">Node_Status</p>
                <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold uppercase">
                  <Activity size={10} className="animate-pulse" />
                  Active_Mainnet
                </div>
             </div>
          </div>
        </div>

        {/* The Action Area: Optimized for immediate visibility */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Navigation Sidebar: Slimmed down */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#111] border border-white/5 rounded-lg p-1.5">
              <nav className="flex lg:flex-col gap-1">
                {['Registry', 'Manifest', 'Security'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`flex-1 lg:w-full flex items-center gap-3 px-3 py-2 text-[10px] font-bold transition-all rounded-md ${
                      activeTab === tab.toLowerCase() 
                        ? 'bg-white/5 text-white border border-white/10 shadow-sm' 
                        : 'text-zinc-600 hover:text-zinc-400'
                    }`}
                  >
                    <Hash size={12} className={activeTab === tab.toLowerCase() ? "text-blue-500" : "text-zinc-800"} />
                    {tab.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="hidden lg:block p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                <p className="text-[9px] text-blue-400/70 leading-tight uppercase font-bold mb-1">Security_Notice</p>
                <p className="text-[10px] text-zinc-500 leading-normal">
                  Verification occurs via SHA-256 content-addressing logic.
                </p>
            </div>
          </div>

          {/* Terminal: Reduced Height & Better Focus */}
          <div className="lg:col-span-9">
            <div className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden">
              
              {/* Compact Window Header */}
              <div className="bg-[#161616] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest ml-2 italic">Query_Terminal</span>
                </div>
                <div className="text-[9px] text-zinc-700">
                  EST_LATENCY: 12ms
                </div>
              </div>

              {/* Terminal Content: Removed min-height, allowing SearchTerminal to define size */}
              <div className="p-1 bg-black/40">
                 <div className="rounded-lg">
                   <SearchTerminal />
                </div>
              </div>

              {/* Simple Status Footer */}
              <div className="px-4 py-2 bg-[#111] border-t border-white/5 flex justify-between items-center text-[9px] text-zinc-600 uppercase font-bold">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-blue-500">
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    System_Ready
                  </span>
                  <span className="opacity-20">|</span>
                  <span>Port: 443</span>
                </div>
                <ArrowUpRight size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Grid Footer */}
        <footer className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
           <div className="flex items-center gap-6 text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">
              <span>© 2026 IPM_PROTOCOL</span>
             
           </div>
           <div className="flex items-center gap-2 text-[10px] text-zinc-700 italic">
              "The network is the registry."
           </div>
        </footer>
      </main>
    </div>
  );
}