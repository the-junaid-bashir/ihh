"use client";

import { use, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRepoData } from "@/lib/useRepoData2";
import { 
  ChevronLeft, FileCode, ShieldCheck, Sparkles, 
  AlertCircle, CheckCircle2, Terminal, Copy, Hash, Globe, Activity
} from "lucide-react";
import BeautifulReview from "../../../../lib/reviewer";

export default function FilePage({ params }) {
  const { folder, cid } = use(params);
  const { uploads, loading } = useRepoData();
  
  const [review, setReview] = useState(null);
  const [checks, setChecks] = useState([]);
  const [activeTab, setActiveTab] = useState("ai");
  const [isFetching, setIsFetching] = useState(false);
  const [isChecking,setIsChecking]=useState(false);
  

  const decoded = decodeURIComponent(folder);
  const file = uploads?.find(f => f.folder === decoded)?.data?.find(d => d.cid === cid);

  const normalizedList = useMemo(() => {
    if (!Array.isArray(checks)) return [];
    const seen = new Set();
    return checks.filter(item => {
      if (!item?.ruleId) return false;
      const key = `${item.ruleId}:${item.line}:${item.column}:${item.message}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [checks]);

  const runAudits = async (content) => {
    if (isFetching || isChecking) return;
    setIsFetching(true);
    setIsChecking(true);

    // AI Review
    fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: content }),
    })
      .then(res => res.json())
      .then(data=>setReview(data))
      .finally(() => setIsFetching(false));
       console.log(review)
    // Static Analysis
    fetch("/api/codecheck/node", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: content }),
    })
      .then(res => res.json())
      .then(data => setChecks(data.response || []))
      .finally(() => setIsChecking(false));
  };

  useEffect(() => {
    if (!loading && file?.content && !review && file.name.endsWith(".js")) {
      //runAudits(file.content);
    }
  }, [loading, file]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-[#050505]">
      <div className="animate-spin h-6 w-6 border-2 border-[#A359FF] border-t-transparent rounded-full" />
    </div>
  );

  if (!file) return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#050505] text-zinc-500">
      <p className="mb-4 text-sm font-mono tracking-tighter">RESOURCE_NOT_FOUND</p>
      <Link href="/" className="text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs">Return Home</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-[#A359FF]/30">
      {/* Top Header */}
      <nav className="border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/folders/${folder}`} className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
              <ChevronLeft className="w-4 h-4 text-zinc-400" />
            </Link>
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 font-mono leading-none mb-1 uppercase tracking-widest">Audit Mode</span>
              <h1 className="text-sm font-semibold text-white leading-none">{file.name}</h1>
            </div>
          </div>
          <button onClick={() => navigator.clipboard.writeText(file.content)} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs font-medium transition-all text-zinc-300">
            <Copy className="w-3.5 h-3.5" /> Copy
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 pb-32">
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1"><Hash className="w-3 h-3" /> Content ID</div>
              <p className="text-xs font-mono text-zinc-300 truncate">{cid}</p>
           </div>
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1"><Activity className="w-3 h-3" /> Audit Status</div>
              <p className="text-xs font-mono text-zinc-300">{isFetching || isChecking ? "Running Diagnostics..." : "Verified"}</p>
           </div>
           <div className="p-4 bg-[#0a0a0b] border border-white/5 rounded-xl">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase font-bold mb-1"><FileCode className="w-3 h-3" /> Language</div>
              <p className="text-xs font-mono text-zinc-300">Node.js / Javascript</p>
           </div>
        </div>

        {/* Primary Content Area (Code) */}
        <div className="relative bg-[#0d0d0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl mb-12">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
             <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                <span className="ml-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Source</span>
             </div>
             <Terminal className="w-3.5 h-3.5 text-zinc-700" />
          </div>
          <div className="p-6 overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar">
            <pre className="text-sm leading-relaxed font-mono text-zinc-400">
              <code>{file.content}</code>
            </pre>
          </div>
        </div>

        {/* Analysis Tabs Section */}
        

      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
      `}</style>
    </div>
  );
}