"use client";

import { useState ,useEffect  } from "react";
import { RepoLoader } from "../../lib/creationloader";
import { ShieldCheck, Terminal, HardDrive, Cpu, X, Zap } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Header2 from "../../lib/header2";

export default function Coder() {
  const [version, setVersion] = useState("normal");
  const [prompt, setPrompt] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [folderName, setFolderName] = useState('');
   const [decoded,setDecoded]=useState("")
   const router = useRouter();


useEffect(() => {
    const token = localStorage.getItem("vjwt")
    
    if (!token) {
      //router.replace("/")
      return
    }
    else if(token){
      const decodedobj = jwtDecode(token)
      setDecoded(decodedobj.sub)

    }
})

  // Preservation of your original logic
  const handleChange = (event) => {
    setVersion(event.target.value);
  };

  const handleCreateRepo = async () => {
    if (folderName === "") {
      alert("empty reponame");
    } else {
      let url = "";
      if (version === "js") {
        setIsCreating(true);
        url = "/api/repo/createjs";
        try {
          let request = await fetch(url, {
            mode: "cors",
            method: "post",
            body: JSON.stringify({
              wallet: decoded, // Ensure 'decoded' is defined in your scope
              foldername: folderName,
              prompt: prompt
            }),
            headers: { "content-type": "application/json" }
          });
          let response = await request.json();
          if (response.success === true) {
            alert("repo created, check the repo section");
          } else {
            alert("repo not created, error");
          }
        } catch (e) {
          alert("Network error");
        }
        setIsCreating(false);
      }
    }
  };

  // High-Design Styles
  const T = {
    bg: '#000000',
    cardBg: '#0A0A0A',
    border: 'rgba(255,255,255,0.1)',
    accent: '#FFFFFF',
    textMuted: '#666666',
    grid: 'rgba(255,255,255,0.05)'
  };

  return (
    <div className="min-h-screen text-white font-mono relative overflow-hidden" style={{ backgroundColor: T.bg }}>
      
      <Header2/>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{ backgroundImage: `linear-gradient(${T.grid} 1px, transparent 1px), linear-gradient(90deg, ${T.grid} 1px, transparent 1px)`, 
                    backgroundSize: '30px 30px' }}></div>

      <RepoLoader isCreating={isCreating} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-16 border-l-2 border-white pl-8">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-gray-500 uppercase mb-4">
            <ShieldCheck size={14} />
            
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            AI<br />
            <span className="text-gray-500">App Repository Builder</span>
          </h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Column 1: Config (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 bg-[#050505] border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest">
                <HardDrive size={16} className="text-blue-500" />
                Project Name
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Name</label>
                  <input 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-xl focus:border-white outline-none transition-colors placeholder:text-white/10"
                    placeholder="ENTER_REPO_ID..."
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-3">Runtime Environment</label>
                  <select 
                    className="bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-white transition-all appearance-none cursor-pointer w-32 text-center"
                    value={version} 
                    onChange={handleChange}
                  >
                    <option value="holder" className="bg-black">Choose</option>
                    <option value="js" className="bg-black">NODE.JS</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`p-8 bg-[#050505] border border-white/10 rounded-sm transition-opacity duration-500 ${version === 'js' ? 'opacity-100' : 'opacity-30'}`}>
              <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-widest">
                <Terminal size={16} className="text-green-500" />
                Prompt 
              </div>
              <textarea 
                className="w-full bg-black/50 border border-white/5 p-4 text-sm font-mono focus:border-white/20 outline-none min-h-[120px] placeholder:text-white/5"
                placeholder={version === 'js' ? "// Provide specific app logic or requirements..." : "Select Node.js to enable AI logic..."}
                disabled={version !== 'js'}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
          </div>

          {/* Column 2: Status & Actions (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-8">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase border-b border-white/10 pb-4">Initialization Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 uppercase">Target:</span>
                  <span>{folderName || 'UNDEFINED'}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 uppercase">Environment:</span>
                  <span className="text-blue-400 uppercase font-bold">{version}</span>
                </div>
                
              </div>

              <div className="pt-8 space-y-3">
                <button 
                  onClick={handleCreateRepo}
                  className="w-full group relative overflow-hidden bg-white text-black font-black py-4 uppercase text-xs tracking-[0.3em] hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  <Zap size={14} fill="currentColor" />
                  Execute
                </button>
                <button className="w-full border border-white/20 text-gray-500 py-4 uppercase text-[10px] tracking-[0.3em] hover:text-white hover:border-white transition-all flex items-center justify-center gap-2">
                  <X size={14} />
                  Abort 
                </button>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 text-[9px] text-gray-600 tracking-widest uppercase">
                  <Cpu size={12} />
                  System ready for deployment...
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
