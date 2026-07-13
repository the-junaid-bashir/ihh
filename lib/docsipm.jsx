import React, { useState } from "react";

const IPMDocsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: "01", title: "INSTALL", cmd: "npm i -g ipm_x", desc: "install ipm on your device" },
    { id: "02", title: "PUBLISH PKG", cmd: "ipm op publish <packagename>", desc: "publishes the pkg to ipm registry" },
    { id: "03", title: "INSTALL PKG", cmd: "ipm op install <packagename>", desc: "downloads the pkg from ipm registry" },
    { id: "04", title: "PUBLISH OPENCLAW", cmd: "ipm op publishclaw <name>", desc: "publishes the openclaw workspace to ipm registry"},
    { id: "05", title: "INSTALL OPENCLAW", cmd: "ipm op installclaw <name>", desc: "installs the openclaw workspace from ipm registry"},
  
  ];

  return (
    <div style={styles.app}>
      <div style={styles.gridOverlay} />
      <header style={styles.nav}>
        <h1 style={{ fontSize: '5vw', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
          DOCS
        </h1>
        <div style={styles.status}><span style={styles.pulse} /></div>
      </header>

      <main style={styles.main}>
        <div style={styles.timeline}>
          {steps.map((step, i) => (
            <div key={i} onClick={() => setActiveStep(i)} style={styles.timeItem(activeStep === i)}>
              <div style={styles.line(activeStep === i)} />
              <span style={styles.timeId}>{step.id}</span>
              <span style={styles.timeTitle}>{step.title}</span>
            </div>
          ))}
        </div>

        <div style={styles.stage}>
          <div style={styles.contentBox}>
            <h1 style={styles.heroTitle}>{steps[activeStep].title}</h1>
            <p style={styles.description}>{steps[activeStep].desc}</p>
            <div style={styles.terminal}>
              <div style={styles.termHeader}>
                <span>EXECUTABLE</span>
                <span style={{ color: '#444' }}>{steps[activeStep].id} // 07</span>
              </div>
              <div style={styles.termBody}>
                <span style={styles.accent}>$</span> {steps[activeStep].cmd}
                <span style={styles.cursor}>█</span>
              </div>
            </div>
          </div>
          <div style={styles.giantText}>{steps[activeStep].id}</div>
        </div>
      </main>

      <footer style={styles.footer}>
        <div>CTRL + SCROLL TO NAVIGATE</div>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    height: '100vh',
    backgroundColor: 'black',
    color: '#fff',
    fontFamily: '"Inter", sans-serif',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  nav: {
    padding: '30px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  status: { fontSize: '10px', color: '#666', display: 'flex', alignItems: 'center', gap: '8px' },
  pulse: { width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 8px #f97316' },
  main: {
    flex: 1,
    display: 'flex',
    padding: '0 50px',
    alignItems: 'center',
    minHeight: 0,
  },
  timeline: {
    width: '250px',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    zIndex: 10,
  },
  timeItem: (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    cursor: 'pointer',
    opacity: active ? 1 : 0.3,
    transition: 'all 0.3s ease',
  }),
  line: (active) => ({
    width: active ? '40px' : '15px',
    height: '1px',
    backgroundColor: active ? '#f97316' : '#fff',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  }),
  timeId: { fontSize: '10px', fontWeight: 'bold', fontFamily: 'monospace' },
  timeTitle: { fontSize: '11px', letterSpacing: '1px' },
  stage: {
    flex: 1,
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
  },
  contentBox: {
    width: '100%',
    maxWidth: '600px',
    zIndex: 5,
  },
  heroTitle: {
    fontSize: 'clamp(28px, 4vw, 64px)',
    fontWeight: '900',
    margin: '0 0 16px 0',
    letterSpacing: '-2px',
    lineHeight: 1,
    wordBreak: 'break-word',
  },
  description: { fontSize: '16px', color: '#888', lineHeight: '1.6', marginBottom: '32px' },
  terminal: {
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid #222',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  termHeader: {
    padding: '10px 20px',
    borderBottom: '1px solid #222',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '9px',
    color: '#666',
  },
  termBody: {
    padding: '25px 20px',
    fontFamily: 'monospace',
    fontSize: '16px',
    wordBreak: 'break-all',
  },
  accent: { color: '#f97316', marginRight: '10px' },
  cursor: { color: '#f97316', marginLeft: '5px' },
  giantText: {
    position: 'absolute',
    fontSize: '500px',
    fontWeight: '900',
    color: 'rgba(255,255,255,0.02)',
    zIndex: 1,
    pointerEvents: 'none',
    right: '0',
  },
  footer: {
    padding: '20px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '9px',
    color: '#333',
    letterSpacing: '2px',
  }
};

export default IPMDocsSection;