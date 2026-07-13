"use client";

import React, { useState, useRef, useEffect } from "react";
import { algoliasearch } from "algoliasearch";
import PackageCard from "./packagecard";
import { Terminal, Shield, Zap, ChevronRight, Activity } from "lucide-react";

const searchClient = algoliasearch('D79SNO8B1R', '5e28f0f65380b998763c5251289f6d9b');

const SearchTerminal = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Auto-focus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const performSearch = async (val) => {
    if (val.length < 2) return;
    setIsSearching(true);
    
    try {
      const response = await searchClient.searchSingleIndex({
        indexName: 'ipm',
        searchParams: { query: val, hitsPerPage: 1 },
      });
      
      if (response.hits?.length) {
        setResult(response.hits[0]);
      } else {
        setResult("NOT_FOUND");
      }
    } catch (err) {
      setResult("ERROR");
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch(query);
    }
  };

  return (
    <div 
      className="w-full bg-[#050505] text-[#00ff41] font-mono border border-[#00ff41]/20 flex flex-col overflow-hidden shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* HEADER: Ultra Slim */}
      <div className="px-4 py-1.5 border-b border-[#00ff41]/20 flex justify-between items-center bg-[#0a0a0a]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41]/20" />
             <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41]/20" />
          </div>
          <span className="text-[9px] font-bold tracking-[0.2em] opacity-50 uppercase">Search_Manifest_v5.0</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] opacity-40">
           <Activity size={10} />
           <span>LIVE_NODE_CONNECTED</span>
        </div>
      </div>

      {/* DYNAMIC CONTENT AREA: Grows only as much as needed */}
      <div 
        ref={scrollRef}
        className="max-h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/40"
      >
        {/* Welcome / Initial Prompt */}
        {!result && !isSearching && (
          <div className="text-[11px] opacity-40 italic">
            {`// enter package name to begin resolution...`}
          </div>
        )}

        {/* SEARCHING STATE */}
        {isSearching && (
          <div className="flex items-center gap-2 animate-pulse text-white">
            <span className="text-xs">{`> SCANNING_REGISTRY...`}</span>
          </div>
        )}

        {/* RESULTS: Rendered wide */}
        {result && (
          <div className="animate-in fade-in slide-in-from-left-1 duration-200">
            {result === "NOT_FOUND" ? (
              <div className="text-red-500 text-xs border border-red-500/20 p-2 bg-red-500/5 inline-block">
                [!] EXCEPTION: PACKAGE_NOT_RESOLVED
              </div>
            ) : result === "ERROR" ? (
              <div className="text-red-500 text-xs italic"> [!] INTERNAL_COMM_FAILURE </div>
            ) : (
              <div className="w-full">
                <div className="flex items-center gap-2 mb-2 text-white/50 text-[10px] uppercase font-bold">
                  <Zap size={10} /> Query_Result:
                </div>
                {/* PackageCard will now take full width of this container */}
                <PackageCard data={result} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* INPUT LINE: Compact & Sticky */}
      <div className="p-3 border-t border-[#00ff41]/10 bg-[#080808]">
        <div className="flex items-center gap-3 group">
          <ChevronRight size={18} className="text-[#00ff41] animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="EXECUTE_CMD..."
            className="flex-1 bg-transparent border-none outline-none text-[#00ff41] text-lg placeholder:text-[#00ff41]/10 uppercase tracking-tighter"
          />
          <div className="flex gap-3 opacity-30 group-focus-within:opacity-100 transition-opacity">
            <Shield size={14} />
            <Terminal size={14} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        input::selection { background: #00ff41; color: black; }
      `}</style>
    </div>
  );
};

export default SearchTerminal;