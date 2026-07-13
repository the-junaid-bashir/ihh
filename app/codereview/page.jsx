"use client";

import { useState } from "react";
import BeautifulReview from "../../lib/reviewer";
import { Terminal, Cpu, Sparkles, Code2 } from "lucide-react";

import Header2 from "../../lib/header2";



export default function CodeReview() {
  const [review, setReview] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [code, setCode] = useState("");

  const getReview = async () => {
    setIsChecking(true);
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: code }),
      });
      const data = await res.json();
      setReview(data);
    } catch (error) {
      console.error("Review failed", error);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">

        <Header2/>
      {/* Background Subtle Grid Effect */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[10px] tracking-widest uppercase">
            <Sparkles size={12} className="text-white" />
            AI Protocol Analysis
          </div>
          <h1 className="text-4xl font-bold tracking-tighter uppercase">
            Review <span className="text-white/40">Engine.</span>
          </h1>
        </div>

        {/* Terminal/Editor Container */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden">
            
            {/* Terminal Header */}
            <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
              </div>
              <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase flex items-center gap-2">
                <Code2 size={12} /> source_payload.js
              </span>
            </div>

            {/* Input Area */}
            <div className="p-1">
              <textarea
                className="w-full bg-transparent p-6 text-sm font-mono text-zinc-300 focus:outline-none min-h-[300px] resize-none placeholder:text-zinc-800"
                placeholder="// Paste code for cryptographic review..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            {/* Action Bar */}
            <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
               <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
                  <Terminal size={14} /> status: {isChecking ? 'Processing' : 'Ready'}
               </div>
               <button
                onClick={getReview}
                disabled={isChecking || !code}
                className="bg-white text-black px-6 py-2 font-bold hover:bg-gray-200 disabled:bg-zinc-700 disabled:text-zinc-500 transition-all uppercase text-[11px] tracking-widest"
              >
                {isChecking ? "Analysing..." : "Run Analysis"}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-12">
          {isChecking ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
              <div className="relative">
                <div className="h-12 w-12 border border-white/10 rounded-full animate-ping"></div>
                <Cpu size={24} className="absolute inset-0 m-auto text-white animate-pulse" />
              </div>
              <div className="space-y-2 text-center">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Mapping Logic Trees</p>
                <div className="w-48 bg-white/5 h-[1px]">
                  <div className="bg-white h-full w-1/3 animate-[shimmer_1.5s_infinite]"></div>
                </div>
              </div>
            </div>
          ) : (
            review && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <BeautifulReview rawData={review} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}