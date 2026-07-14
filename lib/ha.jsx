"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Zap, Cpu, Lock } from "lucide-react";

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const BLUE = "#0A84FF";

const FooterCell = ({ icon, label }) => (
  <div className="zen-hero-cell">
    <div className="zen-hero-cell-icon">{icon}</div>
    <span
      style={{
        fontFamily: MONO,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.2em",
        color: "rgba(255,255,255,0.4)",
      }}
    >
      {label}
    </span>
  </div>
);

const Hero = () => {
  // --- PARALLAX EFFECT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        overflow: "hidden",
        cursor: "default",
        fontFamily: FONT,
        color: "#F5F5F7",
        WebkitFontSmoothing: "antialiased",
        // DARK ambient wallpaper — deep, not flat black, so glass can refract it
        background:
          "radial-gradient(50vw 50vw at 15% 10%, rgba(79,70,229,0.22), transparent 60%)," +
          "radial-gradient(45vw 45vw at 90% 80%, rgba(34,211,238,0.14), transparent 60%)," +
          "radial-gradient(40vw 40vw at 60% 50%, rgba(139,92,246,0.12), transparent 60%)," +
          "#07080B",
      }}
    >
      <style>{`
        @keyframes zenPing { 75%,100% { transform: scale(2.4); opacity: 0; } }
        .zen-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .zen-hero-grid { grid-template-columns: 3fr 6fr 3fr; }
          .zen-hero-side { display: flex !important; }
        }
        .zen-hero-side { display: none; }
        .zen-hero-footer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 700px) {
          .zen-hero-footer { grid-template-columns: repeat(4, 1fr); }
        }
        .zen-hero-cell {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 8px; padding: 24px 0;
          cursor: pointer; transition: background .3s;
        }
        .zen-hero-cell:hover { background: rgba(255,255,255,0.03); }
        .zen-hero-cell-icon { color: rgba(255,255,255,0.35); transition: color .3s, transform .3s; }
        .zen-hero-cell:hover .zen-hero-cell-icon { color: ${BLUE}; transform: scale(1.1); }
        @media (prefers-reduced-motion: reduce) {
          .zen-scanline, .zen-bar { animation: none !important; }
        }
      `}</style>

      {/* Ambient detail: faint dot grid + drifting scanline */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 0.5px, transparent 0.5px)",
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="zen-scanline"
          animate={{ translateY: ["0vh", "100vh"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(10,132,255,0.35), transparent)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* --- MAIN GLASS FRAME --- */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1100,
          borderRadius: 28,
          overflow: "hidden",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 24px 80px -20px rgba(0,0,0,0.65), inset 0 1px 0 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Top status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ position: "relative", width: 7, height: 7 }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: BLUE,
                  opacity: 0.5,
                  animation: "zenPing 1.8s ease-out infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  display: "block",
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: BLUE,
                }}
              />
            </span>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(48,209,88,0.8)",
            }}
          >
            ● online
          </span>
        </div>

        {/* Body grid */}
        <div className="zen-hero-grid">
          {/* Left — equalizer */}
          <div
            className="zen-hero-side"
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 24,
              borderRight: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 12,
              }}
            >
              Network load
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="zen-bar"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{ duration: 2.4, delay: i * 0.12, repeat: Infinity }}
                  style={{
                    height: 16,
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Center — branding */}
          <div
            style={{
              padding: "72px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginBottom: 28,
                padding: "6px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Protocol v1.0
            </motion.div>

            <h1 style={{ margin: 0, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.02 }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 6vw, 68px)",
                  color: "#F5F5F7",
                }}
              >
                Immutable
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 6vw, 68px)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Decentralized
              </span>
            </h1>

            <p
              style={{
                marginTop: 20,
                maxWidth: 380,
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Decentralized infrastructure engineered for high-frequency data
              sovereignty and trustless verification.
            </p>
          </div>

          {/* Right — progress */}
          <div
            className="zen-hero-side"
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 24,
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 8,
              }}
            >
              <span>Sync</span>
              <span>64%</span>
            </div>
            <div
              style={{
                height: 4,
                width: "100%",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "64%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: BLUE,
                  boxShadow: "0 0 12px rgba(10,132,255,0.6)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom capability footer */}
        <div
          className="zen-hero-footer"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <FooterCell icon={<Shield size={16} />} label="SECURE" />
          <FooterCell icon={<Zap size={16} />} label="INSTANT" />
          <FooterCell icon={<Cpu size={16} />} label="SCALABLE" />
          <FooterCell icon={<Lock size={16} />} label="PERMANENT" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;