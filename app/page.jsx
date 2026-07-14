"use client";

//import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import TimelineRoadmap from "../lib/roadmap";
import Header from "../lib/header";
//import Usecases from "../lib/usecases";
import Footer from "../lib/footer";
import TypingDiv from "@/lib/typ";
//import { motion } from "framer-motion";
import Hero from "../lib/ha";
import { useRouter } from "next/navigation";
import VideoPlayer from "../lib/videoplayer";
import AppBuilderHero from "../lib/builder";
import CodeReviewHero from "../lib/extreviewer";
import DocsSection from "../lib/docs";
import IPMDocsSection from "../lib/docsipm";
import ContractAddress from "../lib/ca";
import SponsorshipHero from "../lib/sponsorhero";
import AcceleratorHero from "../lib/micro-accelerator";
import ImmutablePromptsHero from "../lib/promptshero";
import IPMRegistryHero from "../lib/registry";
import EternalFrontendHero from "../lib/defronts";
import ImmutableAgentsHero from "../lib/immutableagentshero";
import PercolatorMarketHero from "../lib/perchero";
import MCPHero from "../lib/mcp";
import RHero from "../lib/allreposhero";
import MHero from "../lib/allmcphero";
import RobinhoodChainIsland from "../lib/robinhood";

const FEATURES = [
  {
    n: "01",
    title: "Immutable code",
    body: "Once deployed, a version is sealed. Every release is cryptographically fixed, so what you shipped is exactly what runs.",
  },
  {
    n: "02",
    title: "Decentralized",
    body: "Your code lives across a distributed network. No single authority can move it, gate it, or take it offline.",
  },
  {
    n: "03",
    title: "Tamper proof",
    body: "Each line is verified on read. Any change to a sealed release is rejected before it can reach anyone.",
  },
  {
    n: "04",
    title: "Package manager",
    body: "A tamper-proof registry for the next web. Immutable deployments, cryptographically verified, no central gatekeeper.",
  },
  {
    n: "05",
    title: "MCP registry",
    body: "A shared registry of MCP servers you can clone in a click and connect straight to your models.",
  },
  {
    n: "06",
    title: "App builder",
    body: "Describe an app and get a working Node.js project. Simple apps today, more languages arriving soon.",
  },
  {
    n: "07",
    title: "Code review",
    body: "Automated review that watches your supply chain and flags what changed before it lands.",
  },
  {
    n: "08",
    title: "Takedown resistant",
    body: "Nothing here can be censored or pulled. It persists across the network for as long as the network exists.",
  },
];

export default function Home() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("vjwt"));
  }, []);

  useEffect(() => {
    //const tkn = localStorage.getItem("vjwt")
    if (token == null) {
      router.replace("/");
      return;
    } else if (token != null) {
      router.replace("/dashboard");
    }
  }, [token]);

  return (
    <div className="zen-root relative min-h-screen overflow-x-hidden text-[#F5F5F7] antialiased selection:bg-white/20 selection:text-white">
      {/* AMBIENT CANVAS — the "wallpaper" the glass floats over */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#07080B]" />
        <div className="bloom bloom-a" />
        <div className="bloom bloom-b" />
        <div className="bloom bloom-c" />
        {/* faint grain veil to keep gradients from banding */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-screen bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:3px_3px]" />
      </div>

      <Header />

      <main className="relative z-10">
        {/* SECTION 1: HERO */}
        <section className="px-5 sm:px-6 pt-28 pb-20 md:pt-40 md:pb-28 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <Hero />

            <div className="mt-2 flex justify-center">
              <TypingDiv />
            </div>

            {/* Traits as soft frosted chips instead of a mono banner */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
              {["Immutable", "Decentralized", "Tamper-proof", "Takedown-resistant"].map(
                (t) => (
                  <span
                    key={t}
                    className="glass-chip text-[11px] sm:text-xs font-medium tracking-wide text-white/70"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex justify-center">
              <ContractAddress />
            </div>
          </div>
        </section>

        <div>
        <RobinhoodChainIsland/>

        </div>

        {/* SYSTEM USAGE — glass-framed player */}
        <section className="relative px-5 sm:px-6 py-16 md:py-24 flex flex-col items-center">
          <h1 className="pointer-events-none select-none absolute top-2 left-1/2 -translate-x-1/2 text-[22vw] font-semibold leading-none text-white/[0.015] tracking-tighter">
            HUB
          </h1>

          <div className="relative w-full max-w-5xl">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35">
                  Walkthrough
                </p>
                <h2 className="mt-1 text-2xl md:text-3xl font-medium tracking-tight text-white">
                  See it in motion
                </h2>
              </div>
            </div>

            {/* Frosted frame around the player */}
            <div className="glass overflow-hidden rounded-[28px] p-1.5 transition-transform duration-700 hover:scale-[1.004]">
              <div className="overflow-hidden rounded-[22px]">
                <VideoPlayer />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-sm text-sm leading-relaxed text-white/45">
                A calmer way to ship permanent software — built for scale, sealed for
                trust.
              </p>
              <div className="flex items-center gap-7">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/25">
                    Protocol
                  </span>
                  <span className="text-sm font-medium text-white/80">v1.0.0</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/25">
                    Region
                  </span>
                  <span className="text-sm font-medium text-white/80">Global-Edge</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES — frosted cards, no hard grid */}
        <section className="px-5 sm:px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 md:mb-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35">
                What's inside
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-white">
                Everything, sealed and in one place
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div
                  key={f.n}
                  className="glass group rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-wider text-white/30">
                      {f.n}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-[#0A84FF]" />
                  </div>
                  <h3 className="mb-3 text-lg font-medium tracking-tight text-white">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/45">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT HEROES — calm spacing, no hard dividers */}
        <div className="space-y-4 md:space-y-8">
          <div><MHero /></div>
          <div><IPMRegistryHero /></div>
          <div><MCPHero /></div>
          <div><ImmutablePromptsHero /></div>
          <div><CodeReviewHero /></div>
          <div><ImmutableAgentsHero /></div>
          <div><AcceleratorHero /></div>
        </div>

        {/* SECTION 3: ROADMAP */}
        <section className="px-5 sm:px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <TimelineRoadmap />
          </div>
        </section>

        {/* DOCS */}
        <section className="px-5 sm:px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <DocsSection />
          </div>
        </section>

        <section className="px-5 sm:px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <IPMDocsSection />
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </main>

      <style jsx global>{`
        .zen-root {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display",
            "SF Pro Text", "Segoe UI", system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Frosted glass — the signature surface */
        .glass {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.06);
        }

        .glass-chip {
          padding: 7px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        /* Ambient color blooms — low saturation, heavy blur, slow drift */
        .bloom {
          position: absolute;
          border-radius: 9999px;
          filter: blur(120px);
          will-change: transform;
        }
        .bloom-a {
          width: 46vw;
          height: 46vw;
          top: -8%;
          left: -6%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.28), transparent 70%);
          animation: drift-a 26s ease-in-out infinite;
        }
        .bloom-b {
          width: 40vw;
          height: 40vw;
          top: 30%;
          right: -10%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 70%);
          animation: drift-b 32s ease-in-out infinite;
        }
        .bloom-c {
          width: 38vw;
          height: 38vw;
          bottom: -12%;
          left: 25%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.16), transparent 70%);
          animation: drift-c 38s ease-in-out infinite;
        }

        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4%, 5%); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, -3%); }
        }
        @keyframes drift-c {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3%, -4%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bloom { animation: none !important; }
          html { scroll-behavior: auto; }
        }

        /* Soft, thin scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        :focus-visible {
          outline: 2px solid #0a84ff;
          outline-offset: 3px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}