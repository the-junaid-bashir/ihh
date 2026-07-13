import React, { useState } from 'react';

const Usecases = () => {
    const [activePhase, setActivePhase] = useState(1);


    //050505
    const T = {
        bg: 'bg-[#17171C]',
        cardBg: 'rgba(255, 255, 255, 0.03)',
        border: 'rgba(255, 255, 255, 0.08)',
        text: '#ffffff',
        muted: '#888888',
        accent1: '#00f2ff', // Cyan
        accent2: '#ff4d00', // Orange/Red
        accent3: '#00ff66', // Green
    };

    const phases = [
        { id: 1, label: 'AI AGENTS', color: T.accent1, icon: '🤖' },
        { id: 2, label: 'FINTECH', color: T.accent2, icon: '🛡️' },
        { id: 3, label: 'RESEARCH', color: T.accent3, icon: '🧠' },
    ];

    const features = [
        { 
            title: 'Deterministic AI Tooling', 
            description: 'Solving logic breakage by pinning MCP servers as Immutable Repositories. Eliminate "API Drift" with cryptographically verified tools.', 
            tags: ['MCP Protocol', 'Content-Addressable'], 
            phase: 1,
            stat: '0% Drift'
        },
        { 
            title: 'Prompt-as-Code (PaC)', 
            description: 'Manage prompts with the rigor of source code. IPFS versioning ensures your AI brain is tamper-proof.', 
            tags: ['IPFS', 'Version Control'], 
            phase: 1,
            stat: 'Immutable'
        },
        { 
            title: 'Anti-Tamper Ledger', 
            description: 'Mirror every push to a decentralized ledger. Eliminate "Force Push" risks and satisfy high-security compliance.', 
            tags: ['Ledger', 'Audit Trail'], 
            phase: 2,
            stat: 'SOC2 Ready'
        },
        { 
            title: 'Sovereign Hosting', 
            description: 'True digital sovereignty. Decentralized hosting ensures tools remain online regardless of third-party interference.', 
            tags: ['P2P', 'Censorship-Res'], 
            phase: 3,
            stat: '99.9% Uptime'
        },
    ];

    const currentPhase = phases.find(p => p.id === activePhase);
    const filteredFeatures = features.filter(f => f.phase === activePhase);

    return (
        <section style={{ 
            backgroundColor: T.bg, 
            color: T.text, 
            minHeight: '100vh', 
            padding: '80px 20px',
            fontFamily: 'Inter, system-ui, sans-serif',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, ${currentPhase.color}15 0%, transparent 70%)`,
                transition: 'all 0.8s ease',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                
                {/* Impact Header */}
                <div style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '40px', height: '2px', background: currentPhase.color }} />
                        <span style={{ color: currentPhase.color, fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}>
                            OPERATIONAL USECASES
                        </span>
                    </div>
                    <h1 style={{ 
                        fontSize: 'clamp(40px, 8vw, 90px)', 
                        fontWeight: '900', 
                        lineHeight: '0.9', 
                        margin: 0,
                        letterSpacing: '-0.04em',
                        textTransform: 'uppercase'
                    }}>
                        Powering the <br/> 
                        <span style={{ 
                            WebkitTextStroke: `1px ${T.border}`, 
                            color: 'transparent' 
                        }}>Next Machine Age</span>
                    </h1>
                </div>

                {/* Vertical Phase Switcher */}
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {phases.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActivePhase(p.id)}
                                style={{
                                    background: activePhase === p.id ? T.cardBg : 'transparent',
                                    border: `1px solid ${activePhase === p.id ? T.border : 'transparent'}`,
                                    padding: '24px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}
                            >
                                <span style={{ fontSize: '24px', opacity: activePhase === p.id ? 1 : 0.4 }}>{p.icon}</span>
                                <div>
                                    <div style={{ 
                                        color: activePhase === p.id ? p.color : T.muted, 
                                        fontWeight: '700',
                                        fontSize: '14px'
                                    }}>
                                        {p.label}
                                    </div>
                                    <div style={{ color: T.muted, fontSize: '11px', marginTop: '4px' }}>
                                        {activePhase === p.id ? 'ACTIVE MODULE' : 'VIEW APPLICATIONS'}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
                        {filteredFeatures.map((f, i) => (
                            <div 
                                key={i}
                                style={{
                                    background: T.cardBg,
                                    border: `1px solid ${T.border}`,
                                    borderRadius: '24px',
                                    padding: '40px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div>
                                    <div style={{ 
                                        fontSize: '11px', 
                                        fontWeight: 'bold', 
                                        color: currentPhase.color,
                                        marginBottom: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <span>MODULE 0{i + 1}</span>
                                        <span>{f.stat}</span>
                                    </div>
                                    <h3 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: '700' }}>{f.title}</h3>
                                    <p style={{ color: T.muted, lineHeight: '1.6', fontSize: '16px' }}>{f.description}</p>
                                </div>

                                <div style={{ marginTop: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {f.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '10px',
                                            padding: '5px 10px',
                                            border: `1px solid ${T.border}`,
                                            borderRadius: '4px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Usecases;