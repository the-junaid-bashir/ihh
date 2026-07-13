"use client";

import { useState } from "react";
import Footer from "../../lib/footer";
import Header2 from "../../lib/header2";

const Terms = () => {
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



  const terms = [
  {
    title: "Acceptance of Terms",
    desc: "By accessing the ImmutableHub platform or using our CLI tools, you agree to be bound by these terms. If you do not agree to all terms, you are prohibited from using our services.",
  },
  {
    title: "Intellectual Property",
    desc: "The platform's code, trademarks, and branding are the exclusive property of ImmutableHub. User-generated content remains the property of the user but is subject to decentralized storage protocols.",
  },
  {
    title: "Prohibited Activities",
    desc: "Users may not attempt to reverse engineer the CLI, bypass security protocols, or use the decentralized storage to host illegal, harmful, or copyright-infringing material.",
  },
  {
    title: "Account & Wallet Security",
    desc: "You are solely responsible for maintaining the confidentiality of your private keys. We cannot recover accounts or data lost due to compromised credentials or lost wallet access.",
  },
  {
    title: "Termination of Service",
    desc: "We reserve the right to restrict access to our API gateways or interfaces for users who violate these terms, though decentralized data may persist on-chain.",
  }
];


  return (
    <div style={styles.wrapper}>
      {/* Watermark reflects the section content */}
      

      <Header2/>
      <main style={styles.content}>
        <div style={styles.grid}>
          {terms.map((policy, i) => (
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

export default Terms;