"use client";

import { useState } from "react";
import { Heart, Wallet, ShieldCheck, Zap, Coins } from "lucide-react";
import Header2 from "../../lib/header2";

export default function SupportOpenSource() {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSupport = async () => {
    setIsProcessing(true);
    // Add your Solana wallet logic here (e.g., Phantom/Solana Pay)
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      <Header2 />
      
      {/* Background Subtle Grid Effect - Matching CodeReview */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20">
        
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[10px] tracking-widest uppercase">
            <Heart size={12} className="text-red-500 animate-pulse" />
            Infrastructure Sustainability
          </div>
          <h1 className="text-4xl font-bold tracking-tighter uppercase">
            Fuel the <span className="text-white/40">Tools.</span>
          </h1>
          <p className="max-w-xl text-zinc-400 text-sm leading-relaxed">
            The world's open source <span className="text-white">MCP infrastructure</span> is built by independent developers. 
            Sponsorships provide the financial fuel needed to maintain the servers and code you ship with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Contribution Card */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/5 border border-white/10">
                  <Coins size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Contribution Protocol</h3>
                  <p className="text-[10px] text-zinc-500 uppercase">Network: Solana Mainnet</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-4">Select Payload (SOL)</label>
                  <div className="grid">

                    <h4>Keep the innovation flowing. Great tools require constant attention</h4>
                    <h4>By sending a small contribution in SOL</h4>
                    <h4>you are providing a direct incentive for developers to stay dedicated to their work—ensuring the tools you love stay secure and up-to-date</h4>
                    <i className="bg-green-500 text-black">100% of contribution goes to the dev verified on chain</i>
                </div>       
                </div>

                <div className="relative">
                
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500 font-bold">SOL</span>
                </div>

               
              </div>
            </div>
          </div>

          {/* Stats/Sidebar */}
          <div className="space-y-4">
          
            
            <div className="p-6 border border-dashed border-white/10">
              <p className="text-[10px] text-zinc-600 leading-loose uppercase">
                By sponsoring, you acknowledge that funds go directly to open-source maintainer wallets to ensure 99.9% uptime for core MCP modules.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}