"use client";

import React, { useMemo } from "react";
import { 
  ShieldAlert, ShieldCheck, Zap, AlertTriangle, 
  CheckCircle2, Activity, Lightbulb, Lock
} from "lucide-react";

export default function BeautifulReview({ rawData }) {
  // 1. Parse the nested JSON safely
  const data = useMemo(() => {
    try {
      // If it's the object you showed, we need data.response
      // and then JSON.parse that string.
      if (!rawData) return null; 
      const parsedResponse = typeof rawData.response === 'string' 
        ? JSON.parse(rawData.response) 
        : rawData.response;
      return parsedResponse;
    } catch (e) {
      console.error("Parsing error", e);
      return null;
    }
  }, [rawData]);


  if (!data) return <div className="text-zinc-500 font-mono p-4">Invalid Review Format</div>;

  const getSeverityColor = (sev) => {
    switch (sev.toLowerCase()) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      default: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Summary & Score Header */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
          <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-2">
            <Activity className="w-3 h-3" /> Executive Summary
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed italic">
            "{data.summary}"
          </p>
        </div>
        
        <div className="p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 flex flex-col items-center justify-center text-center">
          <div className="text-[10px] uppercase font-bold text-purple-400 mb-1">Health Score</div>
          <div className="text-5xl font-black text-white">{data.score}<span className="text-xl text-purple-500/50">/10</span></div>
        </div>
      </section>

      {/* 2. Node.js Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(data.node_specific_metrics).map(([key, value]) => (
          <div key={key} className="p-4 rounded-xl bg-[#0d0d0f] border border-white/5 flex items-center justify-between">
            <span className="text-[10px] uppercase text-zinc-500 font-medium">{key.replace(/_/g, ' ')}</span>
            <span className={`text-xs font-mono font-bold ${value === true || value === 'Safe' || value === 'Good' ? 'text-emerald-400' : 'text-zinc-300'}`}>
              {value === true ? 'PASSED' : value}
            </span>
          </div>
        ))}
      </section>

      {/* 3. Detected Issues (The Core) */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-4 h-4 text-red-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">Vulnerabilities & Improvements</h3>
        </div>
        
        <div className="space-y-3">
          {data.issues.map((issue, idx) => (
            <div key={idx} className="group relative p-4 rounded-xl bg-[#0d0d0f] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] px-2 py-0.5 rounded-full border font-bold uppercase ${getSeverityColor(issue.severity)}`}>
                      {issue.severity}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600">Line {issue.line}</span>
                    <span className="text-zinc-400 text-xs font-semibold capitalize">{issue.type}</span>
                  </div>
                  <p className="text-sm text-zinc-200 mt-2 leading-snug">{issue.description}</p>
                </div>
              </div>
              
              {/* Suggestion Box */}
              <div className="mt-4 flex items-start gap-3 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
                <Lightbulb className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-200/80 leading-relaxed italic">
                  <span className="font-bold text-emerald-500 not-italic mr-1">Fix:</span> {issue.suggestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Positive Feedback */}
      <section className="p-6 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-bold text-white uppercase tracking-tight">Strengths</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.positive_feedback.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/50 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}