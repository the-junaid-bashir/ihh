"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Vote, Landmark, Rocket } from "lucide-react";

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';

const BLUE = "#0A84FF";
const INDIGO = "#4F46E5";
const CYAN = "#22D3EE";
const VIOLET = "#8B5CF6";

// Converted "oranges" to vibrant "blues"
const AMBER = "#38BDF8";   // Vibrant Sky Blue
const CORAL = "#0A84FF";   // Radiant Royal Blue
const CORAL_D = "#1D4ED8"; // Deep Blue
const PAPER = "#E0F2FE";   // Soft Ice Blue/Paper
const CLOUD = "#38BDF8";   // Cool Sky Blue for illustration accent
const INK = "#0F172A";     // Deep Navy/Slate instead of Dark Purple-Gray

const STATS = [
  { icon: Rocket, label: "Cohort", val: "Season 01" },
  { icon: Vote, label: "Who decides", val: "Holder vote" },
  { icon: Landmark, label: "Who pays", val: "Immutablehub" },
];

const EASE = [0.16, 1, 0.3, 1];

/* ---- hand-inked assets ---- */
const stroke = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" };

const BallotBox = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <rect x="-18" y="-6" width="36" height="24" rx="2" />
    <path d="M-18,-6 l18,-12 l18,12" fill="none" />
    <rect x="-5" y="-14" width="10" height="10" fill={CORAL} stroke="none" />
  </g>
);
const Terminal = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <rect x="-22" y="-16" width="44" height="32" rx="3" />
    <path d="M-14,-6 l8,6 l-8,6" fill="none" stroke={CORAL} />
    <line x1="0" y1="6" x2="12" y2="6" />
  </g>
);
const Rocket_ = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <path d="M0,-22 q14,10 8,32 h-16 q-6,-22 8,-32 z" />
    <circle cx="0" cy="-10" r="4" fill={CORAL} stroke="none" />
    <polygon points="-8,10 -18,20 -8,16" fill={CORAL_D} />
    <polygon points="8,10 18,20 8,16" fill={CORAL_D} />
  </g>
);
const Branch = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <circle cx="-14" cy="-12" r="5" />
    <circle cx="-14" cy="12" r="5" />
    <circle cx="14" cy="-12" r="5" />
    <path d="M-14,7 v-9 q0,-6 8,-6 h10" fill="none" />
  </g>
);
const Column = ({ fill }) => (
  <g {...stroke} fill={fill}>
    <rect x="-20" y="14" width="40" height="6" />
    <rect x="-16" y="-14" width="6" height="28" />
    <rect x="-2" y="-14" width="6" height="28" />
    <rect x="12" y="-14" width="6" height="28" />
    <polygon points="-20,-14 0,-26 20,-14" />
  </g>
);

/* ---- Vox character: figure casting a vote, treasury below ---- */
const CloudFigure = () => (
  <g {...stroke}>
    <g fill={CLOUD}>
      <path d="M-70,18 q-26,-2 -24,-20 q1,-16 20,-14 q4,-20 28,-16 q10,-16 30,-8 q18,-10 28,8 q22,-2 20,20 q-2,18 -26,16 z" />
    </g>
    {/* ballot box beneath the figure instead of plain cloud edge */}
    <g transform="translate(0,28) scale(2.2)">
      <BallotBox fill={AMBER} />
    </g>
    <g fill={PAPER}>
      <ellipse cx="-10" cy="4" rx="9" ry="5" transform="rotate(-8 -10 4)" />
      <ellipse cx="10" cy="6" rx="9" ry="5" transform="rotate(6 10 6)" />
    </g>
    <path d="M-20,-4 q-6,-26 8,-30 q16,-4 22,10 q6,14 -4,22 q-14,8 -26,-2 z" fill="#7DD3FC" />
    <path d="M-16,-32 q-6,-20 14,-22 q22,-2 20,20 q-2,14 -18,14 q-14,0 -16,-12 z" fill="#0F172A" />
    {/* raised arm holding a ballot card */}
    <path d="M-18,-16 q16,4 24,-16" fill="none" strokeWidth="5" stroke="#0F172A" />
    <rect x="2" y="-38" width="12" height="16" rx="1.5" fill={PAPER} transform="rotate(-18 8 -30)" />
    <circle cx="8" cy="-48" r="11" fill="#BAE6FD" />
    <path d="M-2,-52 q4,-12 18,-6 q8,4 4,12 q-2,-8 -12,-8 q-8,0 -10,2 z" fill="#1E293B" />
    <path d="M18,-54 q14,-4 12,10 q-2,10 -10,8 q6,-8 0,-14 z" fill={CORAL} />
    <circle cx="11" cy="-48" r="1.4" fill={INK} stroke="none" />
  </g>
);

const VoxIllustration = () => (
  <div
    style={{
      borderRadius: 32,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
      height: "100%",
    }}
  >
    <svg
      viewBox="0 0 700 900"
      style={{ width: "100%", height: "100%", display: "block" }}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A builder casting a vote above a treasury column, surrounded by dev tool icons"
    >
      <defs>
        <linearGradient id="accSky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0284C7" />   {/* Deep sky blue */}
          <stop offset="55%" stopColor="#0EA5E9" />  {/* Vibrant sky blue */}
          <stop offset="100%" stopColor="#E0F2FE" /> {/* Ice white/blue */}
        </linearGradient>
        <filter id="ink4">
          <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="2" seed="19" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect x="0" y="0" width="700" height="900" fill="url(#accSky3)" />

      <g filter="url(#ink4)">
        <g stroke={INK} strokeWidth="1.3" opacity="0.5" fill="none">
          <line x1="0" y1="120" x2="700" y2="620" />
          <line x1="100" y1="0" x2="500" y2="900" />
          <line x1="700" y1="200" x2="180" y2="900" />
          <line x1="0" y1="680" x2="700" y2="260" />
        </g>

        <g transform="translate(140,140) scale(0.9) rotate(-8)">
          <g className="ad" style={{ animationDuration: "8s" }}><Terminal fill={PAPER} /></g>
        </g>
        <g transform="translate(480,110) scale(1.05) rotate(6)">
          <g className="ad" style={{ animationDuration: "7s", animationDelay: "0.6s" }}><Branch fill={PAPER} /></g>
        </g>
        <g transform="translate(560,320) scale(0.8) rotate(-4)">
          <g className="ad ad2" style={{ animationDuration: "9s", animationDelay: "0.3s" }}><Rocket_ fill={PAPER} /></g>
        </g>
        <g transform="translate(120,640) scale(1.15) rotate(4)">
          <g className="ad" style={{ animationDuration: "8.5s" }}><Column fill={CORAL} /></g>
        </g>
        <g transform="translate(560,720) scale(1) rotate(-6)">
          <g className="ad ad2" style={{ animationDuration: "9.5s", animationDelay: "0.5s" }}><Column fill={CORAL_D} /></g>
        </g>

        <g transform="translate(350,470) scale(1.9)">
          <g className="ac"><CloudFigure /></g>
        </g>
      </g>

      <text x="34" y="864" fill={INK} fontFamily={MONO} fontSize="15" letterSpacing="5" opacity="0.85">
        SEASON 01
      </text>
    </svg>
  </div>
);

const AcceleratorHero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "90px 20px",
        overflow: "hidden",
        fontFamily: FONT,
        color: "#F5F5F7",
        WebkitFontSmoothing: "antialiased",
        background:
          "radial-gradient(50vw 50vw at 12% 20%, rgba(79,70,229,0.22), transparent 60%)," +
          "radial-gradient(46vw 46vw at 95% 85%, rgba(34,211,238,0.14), transparent 60%)," +
          "radial-gradient(40vw 40vw at 60% 50%, rgba(56,189,248,0.06), transparent 60%)," +
          "#07080B",
      }}
    >
      <style>{`
        @keyframes aiSpin { to { transform: rotate(360deg); } }
        @keyframes aiSpinRev { to { transform: rotate(-360deg); } }
        @keyframes aiFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes aiPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.55;transform:scale(.72)} }
        @keyframes aiBtnShine { 0%{transform:translateX(-120%) skewX(-20deg)} 60%,100%{transform:translateX(320%) skewX(-20deg)} }
        @keyframes aBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes aBob2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(9px)} }
        .ad  { transform-box: view-box; animation: aBob 8s ease-in-out infinite; }
        .ad2 { animation-name: aBob2; }
        .ac  { transform-box: view-box; animation: aBob 6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .di-float,.di-spin,.di-spinrev,.di-pulse,.di-shine,.ad,.ac { animation: none !important; }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 40,
          alignItems: "stretch",
        }}
      >
        {/* LEFT — copy, larger than life */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "relative", display: "inline-flex", width: "fit-content", animation: "aiFloat 6s ease-in-out infinite" }}>
            <div
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: 999,
                background: `conic-gradient(from 0deg, ${BLUE}, ${CYAN}, ${VIOLET}, ${INDIGO}, ${BLUE})`,
                filter: "blur(16px)",
                opacity: 0.4,
                animation: "aiSpin 14s linear infinite",
              }}
            />
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(6,7,10,0.94)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <span style={{ position: "relative", width: 8, height: 8 }}>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: AMBER,
                    boxShadow: `0 0 12px ${AMBER}`,
                    animation: "aiPulse 1.5s ease-in-out infinite",
                  }}
                />
              </span>
              <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.88)" }}>
                First-ever accelerator on Robinhood
              </span>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontSize: "clamp(52px, 7.2vw, 100px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              margin: "26px 0 20px",
            }}
          >
            Chosen by
            <br />
            <span
              style={{
                background: `linear-gradient(100deg, ${AMBER}, ${CYAN})`,
                //color:"#4F46E5",
                WebkitBackgroundClip: "text",
                //WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Holders.
            </span>
          </motion.h1>

          <p style={{ maxWidth: 520, fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
            Token holders review applications and vote on which teams
            get into each cohort. Every accepted team is funded in stablecoins <br/>
            <i
              style={{
                color: AMBER,
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              Acquired from our token
            </i>{" "}
            by Immutablehub, so founders build on stable assets rather than token
            volatility.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
            {STATS.map(({ icon: Icon, label, val }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                }}
              >
                <Icon size={16} style={{ color: AMBER, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: 0 }}>{val}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "16px 30px",
                borderRadius: 999,
                overflow: "hidden",
                backgroundColor:"#4F46E5",
                //background: `linear-gradient(100deg, ${AMBER}, ${CORAL})`,
                color: "#07080B",
                fontSize: 15,
                fontWeight: 700,
                boxShadow: "0 14px 40px -10px rgba(56, 189, 248, 0.4)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  backgroundColor:'#4F46E5',
                  //background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                  //animation: "aiBtnShine 5s ease-in-out 1s infinite",
                }}
              />
              
              <span style={{ position: "relative" }}>ROBINHOOD CHAIN</span>
            </div>
            
            <a
              href="#governance"
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.8)",
                padding: "16px 26px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              Work in Progress ....
            </a>
          </div>
        </div>

        {/* RIGHT — big vertical Vox illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ minHeight: 560 }}
        >
          <VoxIllustration />
        </motion.div>
      </div>
    </section>
  );
};

export default AcceleratorHero;