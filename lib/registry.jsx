import React from 'react';
import { Box, Globe, ShieldCheck, Zap, Lock, Terminal } from 'lucide-react';

const StatusBadge = () => (
  <div className="flex items-center gap-2 rounded-sm bg-green-500/10 border border-green-500/20 px-3 py-1 text-green-400 font-bold text-xs uppercase tracking-tighter">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    Network Active
  </div>
);

const IPMRegistryHero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background Subtle Grid Effect */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-xs tracking-widest uppercase">
              <Box size={14} className="text-white" />
              Decentralized Registry
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              IPM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Protocol
              </span>
            </h1>

            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              A resilient, tamper-proof package registry built for the next web. 
              No central authority. Immutable deployments. Cryptographically verified.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-white opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <button className="relative bg-white text-black px-8 py-4 font-bold transition-all uppercase text-sm tracking-widest cursor-not-allowed">
                  [BETA RELEASED]
                </button>
              </div>
              
              <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest">
                <a href='/ipm'>Learn More</a>
              </button>

            </div>

          </div>

          {/* Right Content: Registry Visual */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur opacity-30"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">ipm_node_v1.0.4</span>
              </div>
              
              {/* Registry Interaction Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-4">
                    <span className="text-blue-500 text-xs">$</span>
                    <code className="text-sm">ipm install @core/auth</code>
                  </div>
                  <div className="flex gap-4 opacity-70">
                    <span className="text-white/30 text-xs">...</span>
                    <code className="text-xs text-gray-400">Resolving content-addressable hash...</code>
                  </div>
                </div>

                {/* Verification Box */}
                <div className="mt-8 p-4 bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                    <Terminal size={14} className="text-purple-400" />
                    Integrity Check
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Globe size={12} /> Distributed Nodes
                      </div>
                      <span className="text-white">1,240 Verified</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Lock size={12} /> Tamper Proof
                      </div>
                      <span className="text-green-400 text-[9px] px-1 border border-green-500/30">HASH_MATCHED</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-gray-400">
                        <ShieldCheck size={12} /> Protocol
                      </div>
                      <span className="text-white">Layer 1 Registry</span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-white/5">
                        <div className="text-[10px] text-gray-500 mb-1 uppercase tracking-tighter">Registry Status</div>
                        <StatusBadge />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 -z-10 blur-2xl rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IPMRegistryHero;