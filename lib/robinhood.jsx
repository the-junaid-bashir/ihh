"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Landmark,
  Receipt,
  Layers,
  TrendingUp,
  Coins,
  Building2,
  ArrowRight,
} from "lucide-react";

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';

const BLUE = "#0A84FF";
const INDIGO = "#4F46E5";
const CYAN = "#22D3EE";
const VIOLET = "#8B5CF6";

// Vox editorial palette
const INK = "#241F2B";
const CORAL = "#EF7A61";
const CORAL_D = "#E0654C";
const PAPER = "#F6EEE6";
const CLOUD = "#B4B1CC";

const CONTRACTS = [
  { icon: Home, label: "Real Estate" },
  { icon: Landmark, label: "Treasuries" },
  { icon: Building2, label: "Private Credit" },
  { icon: Receipt, label: "Invoices" },
  { icon: Layers, label: "Structured Notes" },
  { icon: TrendingUp, label: "Equities" },
  { icon: Coins, label: "Commodities" },
];

const EASE = [0.16, 1, 0.3, 1];

/* ---- small hand-inked asset drawings (Vox-ish line objects) ------------- */
const stroke = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" };

const House = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <polygon points="-20,-4 0,-22 20,-4" />
    <rect x="-16" y="-4" width="32" height="24" rx="1.5" />
    <rect x="-4" y="6" width="9" height="14" fill={INK} stroke="none" />
  </g>
);
const Building = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <rect x="-13" y="-28" width="26" height="56" rx="1.5" />
    <g fill={INK} stroke="none">
      {[-20, -8, 4, 16].map((y) =>
        [-7, 2].map((x) => <rect key={`${x}${y}`} x={x} y={y} width="5" height="6" />)
      )}
    </g>
  </g>
);
const CoinStack = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <ellipse cx="0" cy="10" rx="17" ry="5" />
    <ellipse cx="0" cy="3" rx="17" ry="5" />
    <ellipse cx="0" cy="-4" rx="17" ry="5" />
    <line x1="-4" y1="-4" x2="-4" y2="-9" />
    <line x1="4" y1="-4" x2="4" y2="-9" />
  </g>
);
const GoldBar = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <polygon points="-22,8 22,8 16,-8 -16,-8" />
    <line x1="-13" y1="-8" x2="-18" y2="8" opacity="0.5" />
  </g>
);
const Bond = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <rect x="-22" y="-15" width="44" height="30" rx="2" />
    <line x1="-14" y1="-4" x2="14" y2="-4" />
    <line x1="-14" y1="4" x2="8" y2="4" />
    <circle cx="14" cy="7" r="4" fill={CORAL} />
  </g>
);

/* ---- the Vox character: figure sitting on a cloud ----------------------- */
const CloudFigure = () => (
  <g {...stroke}>
    {/* cloud */}
    <g fill={CLOUD}>
      <path d="M-70,18 q-26,-2 -24,-20 q1,-16 20,-14 q4,-20 28,-16 q10,-16 30,-8 q18,-10 28,8 q22,-2 20,20 q-2,18 -26,16 z" />
    </g>
    {/* feet / sneakers */}
    <g fill={PAPER}>
      <ellipse cx="-10" cy="6" rx="9" ry="5" transform="rotate(-8 -10 6)" />
      <ellipse cx="10" cy="8" rx="9" ry="5" transform="rotate(6 10 8)" />
    </g>
    {/* jeans / bent legs */}
    <path d="M-20,-2 q-6,-26 8,-30 q16,-4 22,10 q6,14 -4,22 q-14,8 -26,-2 z" fill="#8F8CB0" />
    {/* torso / top (hugging knees) */}
    <path d="M-16,-30 q-6,-20 14,-22 q22,-2 20,20 q-2,14 -18,14 q-14,0 -16,-12 z" fill="#2E2B3A" />
    {/* arm wrapping knees */}
    <path d="M-18,-14 q18,10 34,-2" fill="none" strokeWidth="5" stroke="#2E2B3A" />
    {/* head */}
    <circle cx="8" cy="-46" r="11" fill="#E7B18C" />
    {/* hair + ponytail */}
    <path d="M-2,-50 q4,-12 18,-6 q8,4 4,12 q-2,-8 -12,-8 q-8,0 -10,2 z" fill="#3A3550" />
    <path d="M18,-52 q14,-4 12,10 q-2,10 -10,8 q6,-8 0,-14 z" fill={CORAL} />
    {/* face hint */}
    <circle cx="11" cy="-46" r="1.4" fill={INK} stroke="none" />
  </g>
);

const VoxIllustration = () => (
  <div style={{ borderRadius: 26, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}>
    <svg viewBox="0 0 900 430" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="A founder sitting on a cloud as tokenized real-world assets drift on path lines">
      <defs>
        <linearGradient id="voxSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FB8A78" />
          <stop offset="52%" stopColor="#E7A597" />
          <stop offset="100%" stopColor="#CDC9DE" />
        </linearGradient>
        {/* ink wobble to fake a hand-drawn line */}
        <filter id="ink">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect x="0" y="0" width="900" height="430" fill="url(#voxSky)" />

      {/* everything inked */}
      <g filter="url(#ink)">
        {/* path lines */}
        <g stroke={INK} strokeWidth="1.3" opacity="0.55" fill="none">
          <line x1="0" y1="70" x2="900" y2="320" />
          <line x1="150" y1="0" x2="560" y2="430" />
          <line x1="900" y1="110" x2="220" y2="430" />
          <line x1="0" y1="330" x2="900" y2="150" />
          <line x1="470" y1="0" x2="470" y2="430" opacity="0.35" />
        </g>

        {/* drifting assets — upper = paper/white, lower = coral (like the ref) */}
        <g transform="translate(150,70) scale(0.7) rotate(-8)"><g className="vd" style={{ animationDuration: "8s" }}><Building fill={PAPER} /></g></g>
        <g transform="translate(340,55) scale(1) rotate(6)"><g className="vd" style={{ animationDuration: "7s", animationDelay: "0.6s" }}><House fill={PAPER} /></g></g>
        <g transform="translate(575,60) scale(0.55) rotate(-4)"><g className="vd" style={{ animationDuration: "9s", animationDelay: "0.3s" }}><Bond fill={PAPER} /></g></g>
        <g transform="translate(780,90) scale(0.85) rotate(8)"><g className="vd vd2" style={{ animationDuration: "8.5s" }}><CoinStack fill={PAPER} /></g></g>

        <g transform="translate(130,300) scale(1.25) rotate(6)"><g className="vd vd2" style={{ animationDuration: "9s", animationDelay: "0.4s" }}><Building fill={CORAL} /></g></g>
        <g transform="translate(360,340) scale(1.35) rotate(-6)"><g className="vd" style={{ animationDuration: "7.5s", animationDelay: "0.2s" }}><House fill={CORAL} /></g></g>
        <g transform="translate(600,320) scale(1.05) rotate(5)"><g className="vd vd2" style={{ animationDuration: "8s", animationDelay: "0.8s" }}><GoldBar fill={CORAL_D} /></g></g>
        <g transform="translate(790,300) scale(0.95) rotate(-8)"><g className="vd" style={{ animationDuration: "9.5s", animationDelay: "0.5s" }}><CoinStack fill={CORAL} /></g></g>

        {/* character on cloud (right-of-centre, like the ref) */}
        <g transform="translate(560,175) scale(1.15)">
          <g className="vc"><CloudFigure /></g>
        </g>
      </g>

      {/* Vox-style kicker */}
      <text x="34" y="404" fill={INK} fontFamily={MONO} fontSize="13" letterSpacing="5" opacity="0.85">
        REAL-WORLD ASSETS
      </text>
    </svg>
  </div>
);

const RobinhoodChainIsland = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "110px 20px",
        overflow: "hidden",
        fontFamily: FONT,
        color: "#F5F5F7",
        WebkitFontSmoothing: "antialiased",
        background:
          "radial-gradient(46vw 46vw at 50% 18%, rgba(79,70,229,0.20), transparent 60%)," +
          "radial-gradient(40vw 40vw at 85% 78%, rgba(34,211,238,0.12), transparent 60%)," +
          "radial-gradient(38vw 38vw at 15% 80%, rgba(139,92,246,0.12), transparent 60%)," +
          "#07080B",
      }}
    >
      <style>{`
        @keyframes diSpin { to { transform: rotate(360deg); } }
        @keyframes diSpinRev { to { transform: rotate(-360deg); } }
        @keyframes diFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes diPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.72)} }
        @keyframes diEq { 0%,100%{transform:scaleY(.35)} 50%{transform:scaleY(1)} }
        @keyframes diSheen { 0%{transform:translateX(-140%) skewX(-18deg)} 100%{transform:translateX(240%) skewX(-18deg)} }
        @keyframes diBtnShine { 0%{transform:translateX(-120%) skewX(-20deg)} 60%,100%{transform:translateX(320%) skewX(-20deg)} }

        /* gentle editorial drift */
        @keyframes vBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes vBob2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        .vd  { transform-box: view-box; animation: vBob 8s ease-in-out infinite; }
        .vd2 { animation-name: vBob2; }
        .vc  { transform-box: view-box; animation: vBob 6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .di-spin,.di-spinrev,.di-float,.di-pulse,.di-eq,.di-sheen,.di-shine,.vd,.vc { animation: none !important; }
        }
      `}</style>

      {/* DYNAMIC ISLAND */}
      <div className="di-float" style={{ position: "relative", animation: "diFloat 6s ease-in-out infinite" }}>
        <div className="di-spin" style={{ position: "absolute", inset: -18, borderRadius: 999, background: `conic-gradient(from 0deg, ${BLUE}, ${CYAN}, ${VIOLET}, ${INDIGO}, ${BLUE})`, filter: "blur(18px)", opacity: 0.4, animation: "diSpin 14s linear infinite" }} />
        <div className="di-spinrev" style={{ position: "absolute", inset: -6, borderRadius: 999, background: `conic-gradient(from 180deg, transparent, ${BLUE}55, transparent 60%)`, filter: "blur(6px)", opacity: 0.6, animation: "diSpinRev 9s linear infinite" }} />
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 14, padding: "12px 22px", borderRadius: 999, background: "rgba(6,7,10,0.94)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08)" }}>
          <span style={{ position: "relative", width: 8, height: 8 }}>
            <span className="di-pulse" style={{ position: "absolute", inset: 0, borderRadius: 999, background: BLUE, boxShadow: `0 0 12px ${BLUE}`, animation: "diPulse 1.5s ease-in-out infinite" }} />
          </span>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.88)" }}>
            Building on Robinhood Chain
          </span>
          <span style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 12 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="di-eq" style={{ width: 2.5, height: 12, borderRadius: 2, background: `linear-gradient(${CYAN}, ${BLUE})`, transformOrigin: "bottom", animation: "diEq 1s ease-in-out infinite", animationDelay: `${i * 0.18}s` }} />
            ))}
          </span>
        </div>
      </div>

      {/* EXPANDED CARD */}
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.965 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{
          position: "relative", marginTop: 38, width: "100%", maxWidth: 880,
          borderRadius: 42, padding: "clamp(26px, 4.5vw, 44px)", textAlign: "center", overflow: "hidden",
          background: "rgba(255,255,255,0.05)", backdropFilter: "blur(30px) saturate(160%)", WebkitBackdropFilter: "blur(30px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 30px 90px -24px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.09)",
        }}
      >
        <div className="di-sheen" style={{ position: "absolute", top: 0, left: 0, width: "45%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", animation: "diSheen 7s ease-in-out 1.2s infinite", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          {/* the Vox illustration */}
          <VoxIllustration />

          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(10,132,255,0.10)", border: "1px solid rgba(10,132,255,0.28)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#5AB0FF", margin: "28px 0 20px" }}>
            In development
          </div>

          <h2 style={{ margin: 0, fontSize: "clamp(32px, 5.4vw, 54px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.04 }}>
            Tokenization,{" "}
            <span style={{ background: `linear-gradient(100deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              plug &amp; play
            </span>
          </h2>

          <p style={{ margin: "18px auto 0", maxWidth: 480, fontSize: 15.5, lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}>
            Built-in real-world asset contracts, ready to deploy on Robinhood Chain in a
            single click. Skip the boilerplate  pick an asset class and ship.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginTop: 26 }}>
            {CONTRACTS.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", fontSize: 12.5, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                <Icon size={14} style={{ color: CYAN }} />
                {label}
              </span>
            ))}
          </div>

          <div style={{ position: "relative", marginTop: 32, display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 32px", borderRadius: 999, overflow: "hidden", background: `linear-gradient(100deg, ${BLUE}, ${INDIGO})`, color: "#fff", fontSize: 14, fontWeight: 600, boxShadow: "0 12px 36px -10px rgba(10,132,255,0.6)" }}>
            <span className="di-shine" style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)", animation: "diBtnShine 5s ease-in-out 1s infinite" }} />
            <span style={{ position: "relative" }}>Deploy in one click</span>
            <ArrowRight size={16} style={{ position: "relative" }} />
          </div>

          <p style={{ marginTop: 16, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
            Coming soon · Audited templates · Composable
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RobinhoodChainIsland;