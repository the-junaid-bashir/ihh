"use client";

import { Rocket, ShieldCheck, Zap, Coins, Layers, Users, Clock } from "lucide-react";
import Header2 from "../../lib/header2";

export default function MicroAcceleratorComingSoon() {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      <Header2 />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[10px] tracking-widest uppercase">
            <Rocket size={12} className="text-white animate-pulse" />
            Micro Accelerator · Coming Soon
          </div>

          <h1 className="text-4xl font-bold tracking-tighter uppercase">
            Build with the <span className="text-white/40">Core.</span>
          </h1>

          <p className="max-w-2xl text-zinc-400 text-sm leading-relaxed">
            A tightly-curated micro accelerator for builders aligned with the protocol.
            Designed for speed, leverage, and long-term ecosystem ownership — not demo days.
          </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Clock,
              title: "Phase 01 · Signal",
              desc: "Builders register interest. Alignment signals are evaluated over time, including ecosystem contribution and long-term commitment.",
            },
            {
              icon: Coins,
              title: "Phase 02 · Alignment",
              desc: "Token alignment acts as an eligibility signal. Holding demonstrates conviction, not purchase of access.",
            },
            {
              icon: ShieldCheck,
              title: "Phase 03 · Selection",
              desc: "Invite-only cohort selection based on product depth, execution velocity, and ecosystem fit.",
            },
            {
              icon: Zap,
              title: "Phase 04 · Acceleration",
              desc: "Hands-on support: architecture reviews, infra credits, distribution leverage, and direct core team access.",
            },
            {
              icon: Layers,
              title: "Phase 05 · Integration",
              desc: "Products integrate deeper into the stack, unlocking composability, visibility, and long-term protocol alignment.",
            },
            {
              icon: Users,
              title: "Phase 06 · Continuity",
              desc: "Graduates become ecosystem partners — gaining future privileges, reputation, and early protocol access.",
            },
          ].map((phase, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-[#0A0A0A] border border-white/10 p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 border border-white/10">
                    <phase.icon size={16} />
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.25em] uppercase">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 border border-white/10 bg-white/5">
            <p className="text-[11px] text-zinc-400 leading-loose">
              This accelerator is intentionally small. No public applications. No mass onboarding.
              Participation is a function of trust, alignment, and long-term thinking.
            </p>
          </div>
          <div className="p-6 border border-dashed border-white/10">
            <p className="text-[10px] text-zinc-600 leading-loose uppercase">
              Token holding is an eligibility signal — not a guarantee. Final selection remains discretionary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
