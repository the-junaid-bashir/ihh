import React from 'react';
import { Package, ShieldCheck, Terminal, GitBranch, ArrowRight } from 'lucide-react';

const ImmutablePromptsHero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-xs tracking-widest uppercase">
              <ShieldCheck size={14} className="text-white" />
              Deterministic Protocol
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              Immutable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                Prompts.
              </span>
            </h1>

            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              Prompts stored on a decentralized network — content-addressed via IPM.
              Versioned. Forkable. Auditable.
              Publish once. Resolve forever.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                { label: "Publish", val: "ipm publish <prompt>" },
                { label: "Install", val: "ipm install <prompt>" },
                { label: "Storage", val: "Decentralized" },
                { label: "Versioned", val: "Fully Reproducible" },
                { label: "Address", val: "Content-Hashed CID" },
              ].map((item, i) => (
                <div key={i} className="border border-white/5 bg-white/5 p-3">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold uppercase break-words">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-white opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
              </div>

              <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest">
                Integrated with IPM
              </button>
            </div>

          </div>

          {/* Right Side – Terminal */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-30"></div>

            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">

              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase flex items-center gap-2">
                  <Terminal size={12} /> immutable_prompt.pkg
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-8 space-y-6">

                <div className="space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-tight">
                    Prompt Definition
                  </h3>
                  <p className="text-xs text-zinc-500 uppercase leading-relaxed">
                    Pinned to the network. No drift.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 space-y-4">

                  <div className="flex items-start gap-4">
                    <Package className="text-white mt-1" size={18} />
                    <div>
                      <p className="text-sm font-bold uppercase">
                        Packaged via IPM
                      </p>
                      <p className="text-xs text-zinc-500">
                        Pinned across a decentralized network
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <GitBranch className="text-white mt-1" size={18} />
                    <div>
                      <p className="text-sm font-bold uppercase">
                        Version Locked
                      </p>
                      <p className="text-xs text-zinc-500">
                        Same hash. Same prompt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-black p-4 border border-white/5">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                      No drift
                    </span>
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                      No silent edits
                    </span>
                  </div>

                </div>

                <div className="space-y-4">
                  <h5 className="w-full bg-white text-black py-4 font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                    Integrated With IPM <ArrowRight size={14} />
                  </h5>
                  <p className="text-[9px] text-center text-zinc-600 uppercase tracking-[0.2em]">
                    Installable • Auditable • Forkable • Deterministic
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImmutablePromptsHero;