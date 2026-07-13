"use client";

import { use, useState, useEffect } from "react";

import { Terminal, Cpu, Shield, Boxes, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PackagePage({ params }) {
  // In Next 15, params is a promise. We unwrap it here.
  const resolvedParams = use(params);
  const pkg = resolvedParams?.pkg;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Log immediately to verify the effect actually triggers
    console.log("EXECUTION_TRACE: useEffect triggered for", pkg);

    async function fetchData() {
      try {
       
       
        
        console.log("EXECUTION_TRACE: Fetching from API...");

        const response = await fetch(`/api/ipmpackage/${pkg}`);
        
        if (!response.ok) {
          throw new Error(`SERVER_ERROR: ${response.status}`);
        }

        const json = await response.json();
        console.log("EXECUTION_TRACE: Data received", json.pkg);
        setData(json.pkg);

      } catch (err) {
        console.error("EXECUTION_TRACE: Error", err.message);
        setError(err.message);
      }
    }

    if (pkg) {
      fetchData();
    }
  }, [pkg]); // Re-run when pkg resolves

  // 3. Status View (If this shows, the component IS running)
  if (error) return <div className="p-10 text-red-500 font-mono">ERROR: {error}</div>;
  if (!data) return <div className="p-10 text-zinc-600 font-mono animate-pulse">INITIALIZING_SYSTEM_FOR_{pkg}...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-mono p-6 md:p-12">
      <nav className="max-w-7xl mx-auto mb-12 flex justify-between items-center border-b border-white/5 pb-6">
        <Link href="/ipm" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          <span className="text-[10px] uppercase font-bold tracking-widest">Back to IPM</span>
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Details */}
        <section className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Boxes size={16} className="text-blue-500" />
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{data.author}</span>
            </div>
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase mb-4">
              {data.name}<span className="text-blue-500">.</span>
            </h1>
            <p className="text-lg text-zinc-400 font-sans italic leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-white/5 bg-zinc-900/20">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-600 mb-1">
                <Cpu size={12} /> Version
              </div>
              <div className="text-zinc-200 text-sm">{data.version}</div>
            </div>
            <div className="p-4 border border-white/5 bg-zinc-900/20">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-600 mb-1">
                <Shield size={12} /> License
              </div>
              <div className="text-zinc-200 text-sm">MIT</div>
            </div>
          </div>

          <div className="bg-black border border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-blue-500" />
              <code className="text-xs text-zinc-300">
                ipm op install <span className="text-white">@{data.name}</span>
              </code>
            </div>
          </div>
        </section>

        {/* Right Column: Readme */}
        <section className="relative border border-white/10 p-8 bg-[#080808]">
          <div className="absolute -top-3 left-6 px-2 bg-[#050505] text-[10px] text-zinc-600 font-bold uppercase">
            README.md
          </div>
          <pre className="text-sm leading-7 whitespace-pre-wrap font-sans text-zinc-400">
            {data.readme}
          </pre>
        </section>
      </main>
    </div>
  );
}