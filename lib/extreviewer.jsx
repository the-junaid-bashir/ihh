import React from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertCircle, Star } from 'lucide-react';

const FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", system-ui, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const BLUE = '#0A84FF';
const GREEN = '#30D158';
const RED = '#FF453A';
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

const codeLine = {
  display: 'flex',
  gap: 16,
  alignItems: 'baseline',
  fontFamily: MONO,
  fontSize: 13,
};
const lineNo = { width: 18, fontSize: 11, color: 'rgba(255,255,255,0.25)' };

const ScoreBadge = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ display: 'flex', gap: 3, color: AMBER }}>
      {[0, 1, 2].map((i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
      <Star size={16} fill="currentColor" strokeWidth={0} style={{ opacity: 0.4 }} />
    </div>
    <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>
      7<span style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }}>/10</span>
    </span>
  </div>
);

const CodeReviewHero = () => {
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
            AI code reviewer
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
            AI Code
            <br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>Review</span>
          </h1>

          <p
            style={{
              maxWidth: 420,
              fontSize: 15,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            AI-driven analysis and code scoring for Node.js — improve quality,
            correctness and security before you ship.
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="/codereview"
              style={{
                display: 'inline-flex',
                textDecoration: 'none',
                background: BLUE,
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                boxShadow: '0 8px 30px -8px rgba(10,132,255,0.65)',
              }}
            >
              Open
            </a>
          </div>
        </div>

        {/* RIGHT — diff / review panel */}
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
                <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,69,58,0.5)' }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,214,10,0.5)' }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(48,209,88,0.5)' }} />
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
                security_audit.diff
              </span>
            </div>

            {/* body */}
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ ...codeLine, opacity: 0.5 }}>
                  <span style={lineNo}>05</span>
                  <code>app.onDeploy(() =&gt; {'{'}</code>
                </div>

                {/* removed */}
                <div
                  style={{
                    ...codeLine,
                    margin: '0 -24px',
                    padding: '4px 24px',
                    background: 'rgba(255,69,58,0.10)',
                    borderLeft: `2px solid ${RED}`,
                  }}
                >
                  <span style={{ ...lineNo, color: 'rgba(255,69,58,0.6)' }}>06</span>
                  <code style={{ color: '#FFB4AE' }}>-  const key = "insecure_raw_string";</code>
                </div>

                {/* added */}
                <div
                  style={{
                    ...codeLine,
                    margin: '0 -24px',
                    padding: '4px 24px',
                    background: 'rgba(48,209,88,0.10)',
                    borderLeft: `2px solid ${GREEN}`,
                  }}
                >
                  <span style={{ ...lineNo, color: 'rgba(48,209,88,0.6)' }}>07</span>
                  <code style={{ color: '#A7EFC0' }}>+  const key = await Vault.getSecure();</code>
                </div>

                <div style={{ ...codeLine, opacity: 0.5 }}>
                  <span style={lineNo}>08</span>
                  <code>{'}'});</code>
                </div>
              </div>

              {/* AI insight */}
              <div
                style={{
                  marginTop: 24,
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
                  <Search size={14} style={{ color: BLUE }} />
                  AI analysis result
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: RED }}>
                    <AlertCircle size={13} />
                    Critical: hardcoded credential detected.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: GREEN }}>
                    <CheckCircle2 size={13} />
                    Fixed: migrated to decentralized vault.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.35)',
                      marginBottom: 10,
                    }}
                  >
                    Code score
                  </div>
                  <ScoreBadge />
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