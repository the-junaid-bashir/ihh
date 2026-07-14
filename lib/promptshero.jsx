import React from 'react';
import { Package, ShieldCheck, Terminal, GitBranch, ArrowRight } from 'lucide-react';

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const BLUE = '#0A84FF';

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

const FEATURES = [
  { label: 'Publish', val: 'ipm publish <prompt>' },
  { label: 'Install', val: 'ipm install <prompt>' },
  { label: 'Storage', val: 'Decentralized' },
  { label: 'Versioned', val: 'Fully reproducible' },
  { label: 'Address', val: 'Content-hashed CID' },
];

const ImmutablePromptsHero = () => {
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
            <ShieldCheck size={14} style={{ color: BLUE }} />
            Deterministic protocol
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
            Immutable
            <br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Prompts</span>
          </h1>

          <p
            style={{
              maxWidth: 440,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Prompts stored on a decentralized network — content-addressed via IPM.
            Versioned, forkable, auditable. Publish once, resolve forever.
          </p>

          {/* Feature grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 12,
              marginTop: 28,
            }}
          >
            {FEATURES.map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  padding: '14px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    wordBreak: 'break-word',
                    fontFamily: item.val.includes('ipm ') ? MONO : FONT,
                  }}
                >
                  {item.val}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <span
              style={{
                display: 'inline-flex',
                padding: '14px 28px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Integrated with IPM
            </span>
          </div>
        </div>

        {/* RIGHT — prompt definition panel */}
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                <Terminal size={12} /> immutable_prompt.pkg
              </span>
            </div>

            {/* body */}
            <div style={{ padding: 28 }}>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: 'rgba(255,255,255,0.95)',
                }}
              >
                Prompt definition
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 6,
                }}
              >
                Pinned to the network. No drift.
              </p>

              <div
                style={{
                  marginTop: 24,
                  borderRadius: 18,
                  padding: 22,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Package size={18} style={{ color: BLUE, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                      Packaged via IPM
                    </p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      Pinned across a decentralized network
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <GitBranch size={18} style={{ color: BLUE, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                      Version locked
                    </p>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      Same hash. Same prompt.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 12,
                    padding: '12px 16px',
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    No drift
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    No silent edits
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    padding: '15px',
                    borderRadius: 999,
                    background: BLUE,
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 500,
                    boxShadow: '0 8px 30px -8px rgba(10,132,255,0.65)',
                  }}
                >
                  Integrated with IPM <ArrowRight size={14} />
                </div>
                <p
                  style={{
                    marginTop: 14,
                    textAlign: 'center',
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  Installable • Auditable • Forkable • Deterministic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmutablePromptsHero;