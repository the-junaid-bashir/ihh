"use client";

import { useState } from "react";
import Footer from "../../lib/footer";
import Header2 from "../../lib/header2";

const Policies = () => {
  const [activeStep, setActiveStep] = useState(0);

  const T = {
    bg: "",
    cardBg: "rgba(10, 12, 16, 0.5)",
    border: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#666",
    accent: "#f97316",
    mutedText: "rgba(255,255,255,0.03)" 
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      background: "black",
      color: "white",
      display: "flex",
      fontFamily: '"Inter", "JetBrains Mono", monospace',
      position: 'relative',
      overflowX: 'hidden',
    },
    watermark: {
      position: 'absolute',
      top: '-20px',
      left: '300px',
      fontSize: '180px',
      fontWeight: '900',
      color: 'rgba(255,255,255,0.03)',
      letterSpacing: '-5px',
      pointerEvents: 'none',
      zIndex: 0,
    },
    sidebar: {
      width: "320px",
      borderRight: `1px solid #1a1a1a`,
      padding: "60px 40px",
      position: "sticky",
      top: 0,
      height: "100vh",
      zIndex: 5,
      background: "",
    },
    sidebarTitle: {
      fontSize: "10px",
      letterSpacing: "4px",
      color: "#444",
      marginBottom: "40px",
      fontWeight: "bold"
    },
    sidebarItem: (active) => ({
      display: 'flex',
      alignItems: 'center',
      padding: "15px 0",
      fontSize: "12px",
      letterSpacing: '1px',
      cursor: 'pointer',
      color: active ? "#fff" : "#444",
      borderBottom: `1px solid ${active ? '#333' : 'transparent'}`,
      transition: 'all 0.2s ease',
    }),
    sidebarIndex: {
      marginRight: '15px',
      fontSize: '10px',
      //opacity: 0.5
    },
    content: {
      flex: 1,
      padding: "120px 60px",
      zIndex: 1,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2px', 
      background: '', 
      border: '1px solid #1a1a1a',
    },
    stepCard: {
      background: "black",
      padding: "40px",
      position: "relative",
      minHeight: "350px", // Reduced height since commands are gone
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 0.3s ease',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '40px',
    },
    chip: {
      border: '1px solid #333',
      padding: '4px 12px',
      fontSize: '10px',
      letterSpacing: '2px',
      color: '#666',
    },
    titleContainer: {
      position: 'relative',
      marginBottom: '20px',
    },
    stepTitle: {
      fontSize: "28px",
      fontWeight: "800",
      fontFamily:"verdana",
      position: 'relative',
      zIndex: 2,
      margin: 0,
      letterSpacing: '-1px',
      lineHeight: '1.2'
    },
    stepDesc: {
      fontSize: "15px",
      color: "#888",
      lineHeight: "1.8",
      flex: 1,
      fontFamily:"verdana"
    }
  };



const policies = [
    {
      title: "Data Privacy",
      desc: "Personal information is never stored and is strictly isolated from public metadata archives.",
    },
    {
      title: "Immutable Storage Audit",
      desc: "All code pushed to decentralized storage is final. Users are responsible for auditing their code for sensitive keys before performing a permanent push.",
    },
    {
      title: "User Conduct & Ethics",
      desc: "Platform usage is restricted to legal activities. Automated botting or malicious stress-testing of the decentralized network is strictly prohibited.",
    },
    {
      title: "Service Level Agreement",
      desc: "While decentralized by nature, we maintain high availability for our gateway services and documentation to ensure developer uptime.",
    },
    {
      title: "Wallet Responsibility",
      desc: "Security is a shared responsibility. We never store private keys. Losing access to your wallet means losing access to your repository management.",
    }
  ];

  return (
    <div style={styles.wrapper}>
      {/* Watermark reflects the section content */}
      
        <Header2/>
     

      <main style={styles.content}>
        <div style={styles.grid}>
          {policies.map((policy, i) => (
            <section 
                key={i} 
                style={{
                    ...styles.stepCard,
                    border: `1px solid ${activeStep === i ? '#444' : '#1a1a1a'}`,
                }}
                onMouseEnter={() => setActiveStep(i)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.chip}>POL_0{i + 1}</div>
                <div style={{color: '#333'}}>◈</div>
              </div>

              <div style={styles.titleContainer}>
                <h2 style={styles.stepTitle}>{policy.title.toUpperCase()}</h2>
              </div>

              <p style={styles.stepDesc}>{policy.desc}</p>
              
            </section>
          ))}
        </div>
        <footer>
            <Footer/>
        </footer>
      </main>
    </div>
  );
};

export default Policies;