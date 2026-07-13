"use client";

import React, { useMemo } from "react";
import { 
  ShieldAlert, ShieldCheck, Zap, Activity, 
  Lightbulb, Target, BarChart3, AlertCircle
} from "lucide-react";

export default function PromptReview({ rawData }) {
  // 1. Parse the nested JSON safely
  const data = useMemo(() => {
    if (!rawData) return null;
    try {
      const parsedResponse = typeof rawData.response === 'string' 
        ? JSON.parse(rawData.response) 
        : rawData.response;
      
      // Access the inner "prompt_rating" object
      return parsedResponse?.prompt_rating || parsedResponse;
    } catch (e) {
      console.error("Parsing error", e);
      return null;
    }
  }, [rawData]);

  if (!data) return <div className="text-zinc-500 font-mono p-4">Invalid Review Format</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Score Header */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-2">
            <Target className="w-3 h-3 text-purple-400" /> Strategic Optimization
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed italic">
            "{data.suggested_optimization}"
          </p>
        </div>
        
        <div className="p-5 rounded-2xl bg-[#A359FF]/5 border border-[#A359FF]/20 flex flex-col items-center justify-center text-center">
          <div className="text-[10px] uppercase font-bold text-[#A359FF] mb-1">Overall Score</div>
          <div className="text-5xl font-black text-white">{data.overall_score}<span className="text-xl text-[#A359FF]/50">/10</span></div>
        </div>
      </section>

      {/* 2. Specs / Metrics Grid */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4 text-zinc-500" />
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">Performance Specs</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data.specs || {}).map(([key, spec]) => (
            <div key={key} className="p-4 rounded-xl bg-[#0d0d0f] border border-white/5 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">{key}</span>
                <span className="text-xs font-mono font-bold text-[#A359FF] bg-[#A359FF]/10 px-2 py-0.5 rounded">
                  {spec.score}/10
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug line-clamp-3">
                {spec.feedback}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Identified Risks */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">Identified Risks</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {(data.identified_risks || []).map((risk, idx) => (
            <div key={idx} className="group relative p-4 rounded-xl bg-[#0d0d0f] border border-white/5 hover:border-red-400/20 transition-all flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300 leading-snug">{risk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Enhancement Footer */}
      <section className="p-6 rounded-2xl bg-[#A359FF]/[0.02] border border-[#A359FF]/10">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-4 h-4 text-[#A359FF]" />
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">Optimization Note</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          The prompt architecture was analyzed based on token efficiency, constraint adherence, and structural clarity. 
          Implementing the suggested changes will likely improve output consistency and reduce hallucination rates.
        </p>
      </section>

    </div>
  );
}