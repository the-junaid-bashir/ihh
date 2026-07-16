import React from 'react';
import { Zap, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const BLUE = '#0A84FF';
const AMBER = '#FFD60A';

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

const RULES = [
  { label: 'Stage', val: 'Early phase only' },
  { label: 'Funding', val: 'Zero VC/seed raised' },
  { label: 'License', val: 'Strictly open source' },
  { label: 'Domain', val: 'Web3' },
];

const AcceleratorHero = () => {
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
            <Zap size={14} style={{ color: AMBER }} fill={AMBER} />
            Invite-only protocol
          </span>

          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 76px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 1.03,
              margin: '28px 0 16px',
            }}
          >
            Micro
            <br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Accelerator</span>
          </h1>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', maxWidth: 440, marginBottom: 16 }}>
            Token holders are eligible for early access and priority consideration when
            the micro-accelerator launches.
          </p>

          <p
            style={{
              maxWidth: 440,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            A 4–6 week high-intensity sprint for independent builders. We don't take
            equity or control — we provide the platform, you provide the code.
          </p>

          {/* Rules grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 12,
              marginTop: 28,
            }}
          >
            {RULES.map((rule, i) => (
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
                  {rule.label}
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
                  {rule.val}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button
              style={{
                border: 'none',
                cursor: 'not-allowed',
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
              Coming soon
            </button>
            <a
              href="/accelerator"
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
              Learn more
            </a>
          </div>
        </div>

        {/* RIGHT — agreement panel */}
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
                <Cpu size={12} /> accelerator_v1.sys
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
                The agreement
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 6,
                }}
              >
                No complex term sheets. No board seats.
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
                  gap: 18,
                }}
              >
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: BLUE, flexShrink: 0 }} />
                  <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                    Coming soon
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
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
                    No cost
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
                  Invite only <ArrowRight size={14} />
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
                  Subject to codebase review &amp; verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceleratorHero;