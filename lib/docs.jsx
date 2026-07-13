import React, { useState } from "react";

const DocsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: "01", title: "ENVIRONMENT", cmd: "mkdir hub && cd hub", desc: "Initialize your local workspace environment for decentralized sync." },
    { id: "02", title: "VERSIONING", cmd: "git init", desc: "Instantiate Git tracking to manage state transitions in your project." },
    { id: "03", title: "TOOLCHAIN", cmd: "npm i -g ihub-cli", desc: "Install the core ImmutableHub engine to your global node path." },
    { id: "04", title: "IDENTITY", cmd: "ihub op login <token>", desc: "Establish a secure cryptographic handshake with your token" },
    { id: "05", title: "PUSH REPO", cmd: "ihub op push .", desc: "Broadcast and pin your repository to the decentralized storage layer." },
    { id: "06", title: "PUSH MCP SERVER", cmd: "ihub op push . --mcp true", desc: "Broadcast and pin your mcp server repository to the decentralized storage layer." },
    { id: "07", title: "PUSH PROMPTS", cmd: "ihub op push . --prompt true", desc: "Broadcast and pin your prompts to the decentralized storage layer." },
    { id: "08", title: "CLONE REPO", cmd: "ihub op clone <reponame>", desc: "Downlaod your repo to your device from decentralized storage layer." },
    { id: "09", title: "CLONE MCP SERVER", cmd: "ihub op clone <servername> --mcp true", desc: "Download mcp server to your device from decentralized storage layer." },
    { id: "10", title: "CLONE PROMPTS", cmd: "ihub op clone <reponame> --prompt true", desc: "Downlaod your prompts to your device from decentralized storage layer." },
    {id : "11" , title:"PULL REPO",cmd:"ihub op pull <reponame>",desc:"Pull the commit history into existing local version from decentralized storage layer"},
    { id: "12", title: "PULL MCP SERVER", cmd: "ihub op pull <servername> --mcp true", desc: "Pull the mcp commit history into existing local version from decentralized storage layer" },
    { id: "13", title: "PULL  PROMPTS", cmd: "ihub op pull <reponame> --prompt true", desc: "Pull the prompt commit history into existing local version from decentralized storage layer" },

  ];

  return (
    <div style={styles.app}>
      {/* 1. Background Grid Ornament */}
      <div style={styles.gridOverlay} />

      {/* 2. Top Nav Bar */}
      <header style={styles.nav}>
          <h1 className="text-[5vw] leading-[0.85] font-black uppercase tracking-tighter text-white/20 -mt-2">
                DOCS
            </h1>
        <div style={styles.status}><span style={styles.pulse} /></div>
      </header>

      <main style={styles.main}>
        {/* 3. Left: Vertical Selector */}
        <div style={styles.timeline}>
          {steps.map((step, i) => (
            <div 
              key={i} 
              onClick={() => setActiveStep(i)}
              style={styles.timeItem(activeStep === i)}
            >
              <div style={styles.line(activeStep === i)} />
              <span style={styles.timeId}>{step.id}</span>
              <span style={styles.timeTitle}>{step.title}</span>
            </div>
          ))}
        </div>

        {/* 4. Center/Right: Action Stage */}
        <div style={styles.stage}>
          <div style={styles.contentBox}>
            <h1 style={styles.heroTitle}>{steps[activeStep].title}</h1>
            <p style={styles.description}>{steps[activeStep].desc}</p>
            
            <div style={styles.terminal}>
              <div style={styles.termHeader}>
                <span>EXECUTABLE</span>
                <span style={{ color: '#444' }}>{steps[activeStep].id} // 05</span>
              </div>
              <div style={styles.termBody}>
                <span style={styles.accent}>$</span> {steps[activeStep].cmd}
                <span style={styles.cursor}>█</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Giant Background Text */}
          <div style={styles.giantText}>{steps[activeStep].id}</div>
        </div>
      </main>

      {/* 5. Footer Info */}
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
  logo: { letterSpacing: '4px', fontSize: '12px', fontWeight: '900' },
  status: { fontSize: '10px', color: '#666', display: 'flex', alignItems: 'center', gap: '8px' },
  pulse: { width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 8px #f97316' },
  main: {
    flex: 1,
    display: 'flex',
    padding: '0 50px',
    alignItems: 'center',
  },
  timeline: {
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
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
  }),
  timeId: { fontSize: '10px', fontWeight: 'bold', fontFamily: 'monospace' },
  timeTitle: { fontSize: '12px', letterSpacing: '1px' },
  stage: {
    flex: 1,
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    maxWidth: '600px',
    zIndex: 5,
  },
  meta: { fontSize: '10px', color: '#f97316', marginBottom: '10px', fontWeight: 'bold' },
  heroTitle: { fontSize: '80px', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '-4px' },
  description: { fontSize: '18px', color: '#888', lineHeight: '1.6', marginBottom: '40px' },
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
    fontSize: '18px',
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
    padding: '30px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '9px',
    color: '#333',
    letterSpacing: '2px',
  }
};

export default DocsSection;