import React from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertCircle,Star} from 'lucide-react';


const RatingBadge = () => (
  <div className="flex items-center gap-1.5 rounded-full  px-3 py-1 text-amber-700 font-semibold">
    <Star size={20} fill="currentColor" />
    <Star size={20} fill="currentColor" />
    <Star size={20} fill="currentColor" />
    <Star size={10} fill="currentColor" />
    <h2 className='text-5xl'>7</h2>
  </div>
);


const CodeReviewHero = () => {
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
              <ShieldCheck size={14} className="text-white" />
              AI Code Reviewer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              AI Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Review
              </span>
            </h1>

            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              AI-driven  analysis & code scorer  for Node.js. code
              improve quality, correctness and security
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all uppercase text-sm tracking-widest">
                <a href="/codereview">
                      open
                </a>
              </button>
            </div>
          </div>

          {/* Right Content: Visual "Code Diff/Review" Element */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-green-500/20 blur opacity-30"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">security_audit.diff</span>
              </div>
              
              {/* Review Body */}
              <div className="p-6 space-y-2">
                <div className="flex gap-4 opacity-50">
                  <span className="text-white/30 text-xs w-4">05</span>
                  <code className="text-sm">app.onDeploy(() =&gt; {"{"}</code>
                </div>
                
                {/* Error Line */}
                <div className="flex gap-4 bg-red-500/10 -mx-6 px-6 py-1 border-l-2 border-red-500">
                  <span className="text-red-500/50 text-xs w-4">06</span>
                  <code className="text-sm text-red-200">-  const key = "insecure_raw_string";</code>
                </div>

                {/* Fix Line */}
                <div className="flex gap-4 bg-green-500/10 -mx-6 px-6 py-1 border-l-2 border-green-500">
                  <span className="text-green-500/50 text-xs w-4">07</span>
                  <code className="text-sm text-green-200">+  const key = await Vault.getSecure();</code>
                </div>

                <div className="flex gap-4 opacity-50">
                  <span className="text-white/30 text-xs w-4">08</span>
                  <code className="text-sm">{"}"});</code>
                </div>
                
                {/* AI Insight Box */}
                <div className="mt-8 p-4 bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                    <Search size={14} className="text-blue-400" />
                    AI Analysis Result
                  </div>
                  <div className="space-y-2">

                    <div className="flex items-center gap-2 text-[11px] text-red-400">
                      <AlertCircle size={12} />
                      Critical: Hardcoded credential detected.
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-green-400">
                      <CheckCircle2 size={12} />
                      Fixed: Migrated to Decentralized Vault.
                    </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                    
                    Code Score
                  </div>

                    <RatingBadge/>
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

export default CodeReviewHero;