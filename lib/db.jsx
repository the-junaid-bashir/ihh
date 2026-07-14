"use client";

import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from 'react';
import Link from "next/link";
import FolderPage from "../../lib/cli-features"
import DocsSection from "../../lib/docs";
import SupportSection from "../../lib/support";
import { useRouter } from "next/navigation";
import { RepoLoader } from "../../lib/creationloader";
import MCPPage from "../../lib/mpc-page";
import PromptPage from "../../lib/promptpage";
import IPMPage from "../../lib/ipm-page";
import RegistryPackageView from "../../lib/ipm-searchpage";
import Footer from "../../lib/footer";
import { Database, Command, CuboidIcon } from "lucide-react"
import TokenDisplay from "../../lib/tokendisplay";

export const dynamic = "force-dynamic";

const GithubProDashboard = () => {

    const [activeTab, setActiveTab] = useState('account');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [folderName, setFolderName] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [uploads, setUploads] = useState("")
    const [version, setVersion] = useState("normal")
    const [prompt, setPrompt] = useState("")
    const [checked, setChecked] = useState(false)
    const router = useRouter();
    const [decoded, setDecoded] = useState("")
    const [mcpdata, setMCPData] = useState(null)
    const [dtoken, setdToken] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("vjwt")
        localStorage.setItem("mcp", "yes")
        setdToken(token)

        if (!token) {
            router.replace("/")
            return
        }
        else if (token) {
            const decodedobj = jwtDecode(token)
            setDecoded(decodedobj.sub)

            async function checkRepos() {
                let request = await fetch(`/api/repocheck/${decodedobj.sub}`, {
                    method: "GET",
                    headers: { "content-type": "application/json" }
                })
                let response = await request.json()
                localStorage.setItem("repos", response.data == true ? "yes" : "no")
            }

            async function checkPrompt() {
                let request = await fetch(`/api/promptcheck/${decodedobj.sub}`, {
                    method: "GET",
                    headers: { "content-type": "application/json" }
                })
                let response = await request.json()
                localStorage.setItem("prompts", response.data == true ? "yes" : "no")
            }

            const repoData = async () => {
                let request = await fetch(`/api/data/${decodedobj.sub}`, {
                    headers: { "content-type": "application/json" }
                })
                let response = await request.json()
                setUploads(response ? response : "")
            }

            checkRepos()
            checkPrompt()
            repoData()
        }
    }, [])

    const handleChange = (event) => {
        setVersion(event.target.value);
    };

    const handleCreateRepo = async () => {
        if (folderName == "") {
            alert("empty reponame")
        } else {
            let url = ""
            if (version == "normal") {
                setIsCreating(true)
                url = "/api/repo/create"
                let request = await fetch(url, {
                    mode: "cors",
                    method: "post",
                    body: JSON.stringify({ "wallet": decoded, "foldername": folderName }),
                    headers: { "content-type": "application/json" }
                })
                let response = await request.json()
                alert(response.done == true ? "repo created , check the repo section" : "repo not created , error")
                setIsCreating(false)
            } else {
                setIsCreating(true)
                url = "/api/repo/createjs"
                let request = await fetch(url, {
                    mode: "cors",
                    method: "post",
                    body: JSON.stringify({ wallet: decoded, foldername: folderName, prompt: prompt }),
                    headers: { "content-type": "application/json" }
                })
                let response = await request.json()
                alert(response.success == true ? "repo created , check the repo section" : "repo not created , error")
                setIsCreating(false)
            }
        }
    }

    const logout = () => {
        router.replace("/")
        localStorage.removeItem("vjwt")
    }

    // ---- ZEN / GLASS DESIGN TOKENS ----
    const T = {
        background: '#000000',
        sidebarBg: '#000000',
        glass: 'rgba(255,255,255,0.045)',
        glassHover: 'rgba(255,255,255,0.07)',
        glassBorder: 'rgba(255,255,255,0.09)',
        glassBorderStrong: 'rgba(255,255,255,0.16)',
        textPrimary: 'rgba(255,255,255,0.92)',
        textSecondary: 'rgba(255,255,255,0.55)',
        textTertiary: 'rgba(255,255,255,0.35)',
        accentBlue: '#0A84FF',
        accentGreen: '#30D158',
        accentOrange: '#FF9F0A',
        accentYellow: '#FFD60A',
        divider: 'rgba(255,255,255,0.06)',
    };

    const font = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Helvetica, Arial, sans-serif';

    const styles = {
        dashboard: {
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: T.background,
            fontFamily: font,
        },
        sidebar: {
            width: '260px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            borderRight: `1px solid ${T.divider}`,
            padding: '28px 0',
            position: 'fixed',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
        },
        logoSection: { padding: '0 20px' },
        logo: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 4px',
            borderRadius: '14px',
        },
        nav: {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '0 14px',
        },
        navLabel: {
            fontSize: '11px',
            fontWeight: 600,
            color: T.textTertiary,
            padding: '0 10px 10px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 12px',
            fontSize: '14px',
            fontWeight: 500,
            color: T.textSecondary,
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'left',
            width: '100%',
        },
        navIcon: { fontSize: '15px', width: '20px', textAlign: 'center', display: 'flex' },
        mainContent: { marginLeft: '260px', flex: 1, minHeight: '100vh' },
        topBar: {
            height: '60px',
            borderBottom: `1px solid ${T.divider}`,
            padding: '0 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
        },
        contentArea: { padding: '40px 44px' },
        pageHeader: { marginBottom: '36px' },
        breadcrumb: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: T.textTertiary,
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
        },
        breadcrumbActive: { color: T.textSecondary, fontWeight: 500 },
        pageTitle: {
            fontSize: '28px',
            fontWeight: 600,
            color: T.textPrimary,
            marginBottom: '6px',
            letterSpacing: '-0.02em',
        },
        pageDescription: { fontSize: '15px', color: T.textSecondary, lineHeight: 1.6 },
        section: { marginBottom: '36px' },
        sectionTitle: {
            fontSize: '13px',
            fontWeight: 600,
            color: T.textTertiary,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
        },
        card: {
            backgroundColor: T.glass,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid ${T.glassBorder}`,
            borderRadius: '20px',
            padding: '28px',
            transition: 'all 0.25s ease',
        },
        inputGroup: { marginBottom: '20px' },
        label: {
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            color: T.textTertiary,
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
        },
        input: {
            width: '100%',
            padding: '12px 14px',
            fontSize: '15px',
            color: T.textPrimary,
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: `1px solid ${T.glassBorder}`,
            borderRadius: '12px',
            outline: 'none',
            transition: 'border-color 0.2s ease, background 0.2s ease',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
        },
        buttonPrimary: {
            padding: '11px 22px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: '#000',
            backgroundColor: 'rgba(255,255,255,0.92)',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        },
        buttonSecondary: {
            padding: '11px 22px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: T.textPrimary,
            backgroundColor: 'transparent',
            border: `1px solid ${T.glassBorder}`,
            borderRadius: '999px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        },
        emptyState: {
            textAlign: 'center',
            padding: '56px 24px',
            backgroundColor: T.glass,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: `1px solid ${T.glassBorder}`,
            borderRadius: '20px',
        },
        emptyIcon: { fontSize: '40px', marginBottom: '16px', opacity: 0.4 },
        emptyTitle: { fontSize: '15px', fontWeight: 600, color: T.textPrimary, marginBottom: '6px' },
        emptyDescription: { fontSize: '13px', color: T.textSecondary },
        tabContainer: { maxWidth: '1200px', animation: 'fadeIn 0.3s ease-in-out' },
    };

    const AccountContent = () => (
        <div style={{ maxWidth: '760px' }}>
            <div style={styles.pageHeader}>
                <div style={styles.breadcrumb}>
                    <span>Settings</span>
                    <span>·</span>
                    <span style={styles.breadcrumbActive}>Account</span>
                </div>
                <TokenDisplay dtoken={dtoken} />
            </div>

            <div style={styles.section}>
                <div style={{ marginBottom: '14px' }}>
                    <span style={styles.sectionTitle}>Active Session</span>
                </div>

                <div
                    style={{
                        ...styles.card,
                        borderColor: hoveredCard === 'profile' ? T.glassBorderStrong : T.glassBorder,
                    }}
                    onMouseEnter={() => setHoveredCard('profile')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Authenticated Address</label>
                        <div style={{
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                            fontSize: '15px',
                            color: T.textPrimary,
                            background: 'rgba(255,255,255,0.03)',
                            padding: '14px 16px',
                            borderRadius: '12px',
                            border: `1px solid ${T.divider}`,
                            wordBreak: 'break-all',
                        }}>
                            {decoded}
                        </div>
                    </div>

                    <div style={{
                        marginTop: '20px',
                        padding: '18px 18px',
                        borderRadius: '14px',
                        background: 'rgba(255,255,255,0.03)',
                        border: `1px solid ${T.divider}`,
                    }}>
                        <p style={{ margin: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
                            <span style={{ color: T.accentBlue }}>Login via CLI</span>
                            <code style={{
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                                color: T.textPrimary,
                                background: 'rgba(255,255,255,0.08)',
                                padding: '4px 10px',
                                borderRadius: '8px',
                                fontSize: '12px',
                            }}>
                                ihub op login [token]
                            </code>
                        </p>
                    </div>

                    <div style={{ marginTop: '18px', display: 'flex', gap: '18px' }}>
                        <div style={{ fontSize: '11px', color: T.accentGreen, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.accentGreen, display: 'inline-block' }} />
                            Operational
                        </div>
                        <div style={{ fontSize: '11px', color: T.textTertiary }}>Sync 100%</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ReposContent = () => (
        <div>
            <div style={styles.section}>
                {localStorage.getItem("repos") == "yes" ? (
                    <FolderPage />
                ) : (
                    <div style={styles.emptyState}>
                        <div style={styles.emptyIcon}>📦</div>
                        <h3 style={styles.emptyTitle}>No repositories yet</h3>
                        <p style={styles.emptyDescription}>Create your first repository to get started</p>
                    </div>
                )}
            </div>
        </div>
    );

    const MpcContent = () => (
        <div>
            <div style={styles.section}>
                {localStorage.getItem("mcp") == "yes" ? (
                    <MCPPage />
                ) : (
                    <div style={styles.emptyState}>
                        <div style={styles.emptyIcon}>📦</div>
                        <h3 style={styles.emptyTitle}>No MCP server repos yet</h3>
                        <p style={styles.emptyDescription}>Create your first MCP repository to get started</p>
                    </div>
                )}
            </div>
        </div>
    );

    const PromptContent = () => (
        <div>
            <div style={styles.section}>
                {localStorage.getItem("prompts") == "yes" ? (
                    <PromptPage />
                ) : (
                    <div style={styles.emptyState}>
                        <div style={styles.emptyIcon}>📦</div>
                        <h3 style={styles.emptyTitle}>No prompts yet</h3>
                        <p style={styles.emptyDescription}>Create your first prompt to get started</p>
                    </div>
                )}
            </div>
        </div>
    );

    const navItems = [
        { key: 'account', icon: '⚙', label: 'Account' },
        { key: 'repos', icon: '📁', label: 'Repositories' },
        { key: 'create-repo', icon: '➕', label: 'New Repository' },
        { key: 'mcpregistry', icon: <Database size={15} />, label: 'MCP Registry' },
        { key: 'prompts', icon: <Command size={15} />, label: 'Prompts' },
        { key: 'ipm', icon: <CuboidIcon size={15} />, label: 'Your IPM Packages' },
        { key: 'ipmreg', icon: <CuboidIcon size={15} />, label: 'IPM Registry' },
        { key: 'docs', icon: '📄', label: 'Docs' },
        { key: 'support', icon: '!', label: 'Support' },
    ];

    return (
        <div style={styles.dashboard}>
            <aside style={styles.sidebar}>
                <div style={styles.logoSection}>
                    <div style={styles.logo}>
                        <h1 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: T.textPrimary, margin: 0 }}>
                            ImmutableHub
                        </h1>
                    </div>
                </div>

                <nav style={styles.nav}>
                    <div style={styles.navLabel}>Main</div>
                    {navItems.map(item => (
                        <button
                            key={item.key}
                            style={{
                                ...styles.navItem,
                                backgroundColor: activeTab === item.key ? T.glassHover : 'transparent',
                                color: activeTab === item.key ? T.textPrimary : T.textSecondary,
                            }}
                            onClick={() => setActiveTab(item.key)}
                            onMouseEnter={(e) => { if (activeTab !== item.key) e.currentTarget.style.backgroundColor = T.glass; }}
                            onMouseLeave={(e) => { if (activeTab !== item.key) e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                            <span style={styles.navIcon}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}

                    <div style={{ marginTop: '28px', textAlign: 'center' }}>
                        <button
                            onClick={() => logout()}
                            style={{
                                padding: '10px 28px',
                                fontSize: '12px',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                background: 'rgba(255,255,255,0.06)',
                                color: T.textPrimary,
                                border: `1px solid ${T.glassBorder}`,
                                borderRadius: '999px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            </aside>

            <main style={styles.mainContent}>
                <div style={styles.topBar} />

                <div style={styles.contentArea}>
                    {activeTab === 'account' && <AccountContent />}
                    {activeTab === 'repos' && <ReposContent />}

                    {activeTab === "create-repo" && (
                        <div style={styles.tabContainer}>
                            <RepoLoader isCreating={isCreating} />

                            <div style={styles.pageHeader}>
                                <div style={styles.breadcrumb}>
                                    <span style={styles.breadcrumbActive}>Repo Initialization</span>
                                </div>
                                <h1 style={styles.pageTitle}>Create new repo</h1>
                                <p style={styles.pageDescription}>Spin up a fresh repository in a couple of taps.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
                                <div
                                    style={{ ...styles.card, borderColor: hoveredCard === 'col-1' ? T.glassBorderStrong : T.glassBorder }}
                                    onMouseEnter={() => setHoveredCard('col-1')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div style={styles.inputGroup}>
                                        <label style={styles.label}>Repository Identifier</label>
                                        <input
                                            style={styles.input}
                                            type="text"
                                            placeholder="e.g. abcv1"
                                            value={folderName}
                                            onChange={(e) => setFolderName(e.target.value)}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px', paddingTop: '20px', borderTop: `1px solid ${T.divider}` }}>
                                        <button style={styles.buttonPrimary} onClick={() => handleCreateRepo()}>
                                            Create Repo
                                        </button>
                                        <button style={styles.buttonSecondary} onClick={() => setActiveTab('repos')}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        ...styles.card,
                                        borderColor: hoveredCard === 'col-2' ? T.glassBorderStrong : T.glassBorder,
                                        opacity: version === "js" ? 1 : 0.55,
                                    }}
                                    onMouseEnter={() => setHoveredCard('col-2')}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {version == "js" && (
                                        <div style={styles.inputGroup}>
                                            <label style={styles.label}>Generation Prompt</label>
                                            <input
                                                style={styles.input}
                                                type="text"
                                                placeholder="e.g. single file code generation prompt"
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="slt" style={styles.label}>Choose a version</label>
                                        <select
                                            id="slt"
                                            value={version}
                                            onChange={handleChange}
                                            style={{
                                                ...styles.input,
                                                width: 'auto',
                                                padding: '10px 14px',
                                                background: 'rgba(255,255,255,0.06)',
                                                fontFamily: 'inherit',
                                            }}
                                        >
                                            <option value="normal">Normal</option>
                                            <option value="js">Js</option>
                                        </select>
                                        <p style={{ fontSize: '13px', color: T.textSecondary, marginTop: '12px' }}>
                                            Selected: <strong style={{ color: T.textPrimary }}>{version}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'mcpregistry' && <MpcContent />}
                    {activeTab === 'prompts' && <PromptContent />}
                    {activeTab === 'ipm' && <IPMPage />}
                    {activeTab === 'ipmreg' && <RegistryPackageView />}
                    {activeTab === 'docs' && <DocsSection />}
                    {activeTab === 'support' && <SupportSection />}
                </div>

                <footer>
                    <Footer />
                </footer>
            </main>
        </div>
    );
};

export default GithubProDashboard