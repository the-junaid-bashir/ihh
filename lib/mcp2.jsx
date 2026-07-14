import React from 'react';
import { Box, Globe, ShieldCheck, Lock, Terminal } from 'lucide-react';

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const BLUE = '#0A84FF';
const GREEN = '#30D158';

const glass = {
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.10)',
  boxShadow:
    '0 8px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.08)',
};

const chip = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '7px 14px',
  borderRadius: 999,
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(18px) saturate(160%)',
  WebkitBackdropFilter: 'blur(18px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.10)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.02em',
  color: 'rgba(255,255,255,0.7)',
};

const row = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 12,
  marginBottom: 14,
};
const rowLeft = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: 'rgba(255,255,255,0.45)',
};

const StatusBadge = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 12px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 500,
      color: GREEN,
      background: 'rgba(48,209,88,0.10)',
      border: '1px solid rgba(48,209,88,0.25)',
    }}
  >
    <span style={{ position: 'relative', width: 8, height: 8 }}>
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 999,
          background: GREEN,
          opacity: 0.6,
          animation: 'zenPing 1.6s ease-out infinite',
        }}
      />
      <span
        style={{
          position: 'relative',
          display: 'block',
          width: 8,
          height: 8,
          borderRadius: 999,
          background: GREEN,
        }}
      />
    </span>
    Network active
  </span>
);

const MCPHero = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: FONT,
        color: '#F5F5F7',
        WebkitFontSmoothing: 'antialiased',
        // DARK ambient wallpaper — deep, not flat black, so glass can refract it
        background:
          'radial-gradient(50vw 50vw at 15% 10%, rgba(79,70,229,0.22), transparent 60%),' +
          'radial-gradient(45vw 45vw at 90% 80%, rgba(34,211,238,0.14), transparent 60%),' +
          'radial-gradient(40vw 40vw at 60% 50%, rgba(139,92,246,0.12), transparent 60%),' +
          '#07080B',
      }}
    >
      <style>{`@keyframes zenPing{75%,100%{transform:scale(2.2);opacity:0}}
        @media (prefers-reduced-motion: reduce){[data-zen-ping]{animation:none!important}}`}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div>
          <span style={chip}>
            <Box size={14} style={{ color: BLUE }} />
            Decentralized MCP registry
          </span>

          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.03,
              margin: '28px 0',
            }}
          >
            MCP
            <br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Registry</span>
          </h1>

          <p
            style={{
              maxWidth: 420,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            A resilient, tamper-proof MCP registry built for the next agentic web. No
            central authority, immutable deployments, cryptographically verified.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button
              style={{
                border: 'none',
                cursor: 'pointer',
                background: BLUE,
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 999,
                font: 'inherit',
                fontSize: 14,
                fontWeight: 500,
                boxShadow: '0 8px 30px -8px rgba(10,132,255,0.65)',
              }}
            >
              Released
            </button>

            <a
              href="/mcpservers"
              style={{
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.8)',
                padding: '14px 28px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Discover
            </a>
          </div>
        </div>

        {/* RIGHT — terminal panel */}
        <div>
          <div style={{ ...glass, borderRadius: 26, overflow: 'hidden' }}>
            {/* header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{ display: 'flex', gap: 8 }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                ipm_node_v1.0.4
              </span>
            </div>

            {/* body */}
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: MONO }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                  <span style={{ color: BLUE, fontSize: 12 }}>$</span>
                  <code style={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                    ihub op clone @mcpservername
                  </code>
                </div>
                <div
                  style={{ display: 'flex', gap: 16, marginTop: 8, opacity: 0.7 }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
                    ...
                  </span>
                  <code style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                    Resolving content-addressable hash…
                  </code>
                </div>
              </div>

              {/* verify */}
              <div
                style={{
                  marginTop: 20,
                  borderRadius: 18,
                  padding: 20,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: 16,
                  }}
                >
                  <Terminal size={14} style={{ color: BLUE }} />
                  Integrity check
                </div>

                <div style={row}>
                  <span style={rowLeft}>
                    <Globe size={12} /> Distributed nodes
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>1,240 verified</span>
                </div>

                <div style={row}>
                  <span style={rowLeft}>
                    <Lock size={12} /> Tamper proof
                  </span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 500,
                      color: GREEN,
                      background: 'rgba(48,209,88,0.10)',
                      border: '1px solid rgba(48,209,88,0.25)',
                    }}
                  >
                    Hash matched
                  </span>
                </div>

                <div style={row}>
                  <span style={rowLeft}>
                    <ShieldCheck size={12} /> Protocol
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Layer 1 registry</span>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: 12,
                    marginTop: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.35)',
                      marginBottom: 6,
                    }}
                  >
                    Registry status
                  </div>
                  <StatusBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCPHero;