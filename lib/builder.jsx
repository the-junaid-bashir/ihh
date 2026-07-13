import React from 'react';
import { Terminal, Cpu, Code2, Sparkles } from 'lucide-react';

const AppBuilderHero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Text and Identity */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-xs tracking-widest uppercase">
              <Sparkles size={14} className="text-white" />
              Build  Your  Own Apps with a Single Prompt
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              Immutable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Architect.
              </span>
            </h1>

            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              Build  unalterable Node.js applications directly to the decentralized network. 
              AI-driven generation meets cryptographic permanence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a  href="/coder" className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all uppercase text-sm tracking-widest">
                open
              </a>
            </div>
          </div>

          {/* Right Content: Visual "Terminal/Editor" Element */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-30"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">app_builder_v1.0.js</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <span className="text-white/30 text-xs">01</span>
                  <code className="text-sm text-blue-400">import <span className="text-white">{`{ wormhole }`}</span> from "@wormhole-foundation/sdk";</code>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/30 text-xs">02</span>
                  <code className="text-sm text-gray-300">const wh = await wormhole("Mainnet", [evm, solana])</code>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/30 text-xs">03</span>
                  <code className="text-sm text-gray-300">const solCtx =(<span className="text-green-400">'wh.getChain("Solana");'</span>);</code>
                </div>
                
                {/* AI Processing Simulation */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-white/80">
                    <Cpu size={16} className="animate-pulse" />
                    <span className="text-xs uppercase tracking-widest">Building App</span>
                  </div>
                  <div className="w-full bg-white/5 h-[2px] mt-4">
                    <div className="bg-white h-full w-2/3 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppBuilderHero;