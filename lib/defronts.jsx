import React from 'react';
import { Shield, Globe, HardDrive, Lock, Cpu, ArrowRight, RefreshCw, Layers } from 'lucide-react';

const EternalFrontendHero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background Subtle Grid Effect - Matching your theme */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: The Pitch */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-xs tracking-widest uppercase text-emerald-500">
              <Shield size={14} className="fill-emerald-500/20" />
              Immutable Deployment Active
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              Eternal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Frontends.
              </span>
            </h1>
            <h5 className="text-zinc-300 font-medium">Stop hosting. Start pinning. Deploy web experiences that exist as long as the internet does.</h5>
            
            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6 text-sm">
              Decentralized, content-addressed frontends that survive server outages, censorship, and domain seizures. Your code, cryptographically hashed and distributed across a global peer-to-peer network.
            </p>

            {/* IPFS/P2P Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                { label: "Protocol", val: "IPFS / Content-Addressed" },
                { label: "Uptime", val: "100% P2P Resilient" },
                { label: "Security", val: "Tamper-Proof Hashes" },
                { label: "Control", val: "Self-Custodial Keys" }
              ].map((spec, i) => (
                <div key={i} className="border border-white/5 bg-white/5 p-3 hover:bg-white/10 transition-colors group">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">{spec.label}</p>
                  <p className="text-sm font-bold uppercase tracking-tight">{spec.val}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-emerald-500 opacity-20 blur group-hover:opacity-50 transition duration-1000"></div>
                <button className="relative bg-white text-black px-8 py-4 font-bold transition-all uppercase text-sm tracking-widest hover:bg-zinc-200">
                  Deploy to IPFS
                </button>
              </div>
              
              <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest flex items-center gap-2">
                <Globe size={16} /> 
                <a href='#'>View Public Gateways</a>
              </button>
            </div>
          </div>

          {/* Right Content: The Deployment Terminal */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-transparent blur opacity-30"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase flex items-center gap-2">
                  <HardDrive size={12} /> eternal_deploy.sh
                </span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">$ ipfs add -r ./build</p>
                  <div className="bg-black/40 p-4 border border-white/5 text-[11px] leading-relaxed text-zinc-400">
                    <p className="text-white">added QmZ4t... build/index.html</p>
                    <p className="text-white">added QmXy9... build/static/js/main.js</p>
                    <p className="mt-2 text-emerald-400">✓ Root Directory CID generated:</p>
                    <p className="text-emerald-500 font-bold break-all">QmPv9S...F6Xy7Z8E9T0A</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <RefreshCw className="text-emerald-500 mt-1 animate-spin-slow" size={18} />
                    <div>
                      <p className="text-sm font-bold uppercase">Pinning to Global Nodes</p>
                      <p className="text-[10px] text-zinc-500 uppercase">Redundancy factor: 3x (NYC, LON, SIN)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-black p-4 border border-white/5">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">Persistence</span>
                    <span className="text-xs text-emerald-500 font-bold uppercase">Guaranteed</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-emerald-600 text-white py-4 font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                    Verify Content Hash <ArrowRight size={14} />
                  </button>
                  <p className="text-[9px] text-center text-zinc-600 uppercase tracking-[0.2em]">
                    Merkle-Tree integrity: Validated
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EternalFrontendHero;