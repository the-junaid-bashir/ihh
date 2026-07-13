"use client";

import { useState } from "react";
import { Box, Globe, ShieldCheck, Zap, Lock, Terminal, Cpu, ArrowRight } from "lucide-react";
import Header2 from "../../lib/header2";

export default function IPMRegistryPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      <Header2 />
      
      {/* Background Subtle Grid Effect */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        
        {/* Header Section */}
        <div className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[10px] tracking-widest uppercase">
            <Globe size={12} className="text-blue-500 animate-pulse" />
            Distributed Protocol v1.0.4-beta
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            IPM <span className="text-white/30">Registry.</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-sm leading-relaxed border-l border-white/10 pl-6">
            The world’s first <span className="text-white">decentralized, tamper-proof</span> package registry. 
            Replacing centralized gatekeepers with a resilient, content-addressable network 
            built on peer-to-peer integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Terminal / Status Card */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 overflow-hidden">
              
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                </div>
                <span className="text-[9px] text-zinc-500 tracking-widest uppercase font-bold">registry_init.sh</span>
              </div>

              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <Terminal size={20} className="text-blue-400" />
                    Immutable Infrastructure
                  </h3>
                  <div className="space-y-3 text-sm text-zinc-400 leading-relaxed">
                    <p>Current registries are single points of failure. IPM uses <span className="text-white">content-addressable storage</span> to ensure that the code you run today is exactly the code you deployed, forever.</p>
                    
                    <div className="grid gap-2 pt-4">
                      <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/5">
                        <ShieldCheck size={16} className="text-green-500 mt-1" />
                        <div>
                          <span className="block text-white text-xs font-bold uppercase tracking-tight">Tamper Proof</span>
                          <span className="text-[11px]">Cryptographic hashes prevent any unauthorized code injection at the registry level.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-white/5 border border-white/5">
                        <Zap size={16} className="text-yellow-500 mt-1" />
                        <div>
                          <span className="block text-white text-xs font-bold uppercase tracking-tight">Resilient</span>
                          <span className="text-[11px]">Peer-to-peer distribution means no downtime, even if major backbones fail.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coming Soon CTA */}
                <div className="pt-6 border-t border-white/10">
                    <button 
                        disabled
                        className="w-full bg-white text-black py-4 font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-2 cursor-not-allowed opacity-90"
                    >
                        Registry Access Coming Soon
                        <Lock size={14} />
                    </button>
                    <p className="text-center text-[9px] text-zinc-600 mt-4 uppercase tracking-widest">
                        Genesis block pending • Q4 2026 
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Specs */}
          <div className="space-y-6">
            <div className="p-6 bg-[#0A0A0A] border border-white/10 space-y-6">
              <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Network Stats</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-zinc-400 uppercase">Latency</span>
                  <span className="text-xs font-bold">12ms</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-zinc-400 uppercase">Nodes</span>
                  <span className="text-xs font-bold">Distributed</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-[10px] text-zinc-400 uppercase">Integrity</span>
                  <span className="text-xs font-bold text-green-400">SHA-256</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="p-4 bg-blue-500/5 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                        <Cpu size={14} />
                        <span className="text-[10px] font-bold uppercase">Node Operator</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-tight">
                    
                    </p>
                    <a href="#" className="inline-flex items-center gap-1 mt-3 text-[10px] text-white hover:underline uppercase font-bold">
                        Learn More <ArrowRight size={10} />
                    </a>
                </div>
              </div>
            </div>

            <div className="p-6 border border-dashed border-white/10">
              <p className="text-[10px] text-zinc-600 leading-loose uppercase italic">
                "The central point of failure in modern software isn't the code—it's the distribution."
              </p>
              <p className="text-[9px] text-zinc-500 mt-2">— IPM Manifesto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}