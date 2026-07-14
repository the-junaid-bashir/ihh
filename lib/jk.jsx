"use client";

//import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import TimelineRoadmap from "../lib/roadmap";
import Header from "../lib/header";
//import Usecases from "../lib/usecases";
import Footer from "../lib/footer";
import TypingDiv from "@/lib/typ";
//import { motion } from "framer-motion";
import Hero from "../lib/ha";
import { useRouter } from "next/navigation";
import VideoPlayer from "../lib/videoplayer";
import AppBuilderHero from "../lib/builder";
import CodeReviewHero from "../lib/extreviewer";
import DocsSection from "../lib/docs";
import IPMDocsSection from "../lib/docsipm";
import ContractAddress from "../lib/ca";
import SponsorshipHero from "../lib/sponsorhero";
import AcceleratorHero from "../lib/micro-accelerator";
import ImmutablePromptsHero from "../lib/promptshero";
import IPMRegistryHero from "../lib/registry";
import EternalFrontendHero from "../lib/defronts";
import ImmutableAgentsHero from "../lib/immutableagentshero";
import  PercolatorMarketHero from "../lib/perchero";
import MCPHero from "../lib/mcp";
import RHero from "../lib/allreposhero";
import MHero from "../lib/allmcphero";



export default function Home() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("vjwt"));
  }, []);

  useEffect(() => {
    //const tkn = localStorage.getItem("vjwt")
    if (token==null) {
      router.replace("/")
      return
    }
    else if(token !=null){

      router.replace("/dashboard")

    }}, [token])
   //[#050505]
   //[#17171C]
   //[#010409]
  return (
    <div className="min-h-screen bg-black text-[#E0E0E0] font-mono selection:bg-white selection:text-black">
      
      {/* BRUTALIST OVERLAY */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10"></div>

      <Header />
      
      <main className="relative z-10">
  
        
        
        {/* SECTION 1: HERO */}
        <section className="px-6 py-24 md:py-40 flex flex-col items-center border-b border-white/10">
          <div className="w-full max-w-7xl">
            <div className="pt-3">
              <Hero />
               <center>
                 <TypingDiv/>
              </center>

              <pre className="mt-12 text-xl md:text-2xl uppercase tracking-widest text-white/60" >       Immutable • Decentralized • Tamper-proof • Takedown-resistant</pre> 
             
             

              <br/> <center>
                  
                  <ContractAddress/>
   
               </center>
             
            </div>
          </div>
        </section>




<div className="relative w-full min-h-screen bg-[#010409] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
  
  {/* 1. BACKGROUND DECOR (Roadmap Style) */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
     <h1 className="text-[20vw] font-black text-white/[0.02] absolute top-[-5%] left-1/2 -translate-x-1/2 leading-none">
        HUB
     </h1>
  </div>

  {/* 2. THE STAGE (Adds the soft glow behind the player) */}
  <div className="relative w-full max-w-6xl">
    
    {/* Cinematic Glow */}
    
    
    {/* 3. TOP LEVEL LABELS */}
    <div className="flex items-end justify-between mb-8 relative z-10">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          
          <span className="text-indigo-500 text-[10px] font-bold tracking-[0.4em] uppercase">
            
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tighter">System Usage</h2>
      </div>
      
    </div>

    {/* 4. THE PLAYER CONTAINER (With added lift and border) */}
    <div className="relative z-10 transition-transform duration-700 hover:scale-[1.005]">
       <VideoPlayer />
    </div>

    {/* 5. CAPTION / FOOTER DETAIL */}
    <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5 pt-8 relative z-10">
      <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
        Experience the next generation of <span className="text-white">immutable architecture</span>. Designed for scale, built for security.
      </p>
      
      <div className="flex items-center gap-8">
        <div className="flex flex-col">
          <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Protocol</span>
          <span className="text-indigo-500 text-sm font-bold italic">V1.0.0</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Region</span>
          <span className="text-gray-400 text-sm font-bold">Global-Edge</span>
        </div>
      </div>
    </div>

  </div>
</div>


















        

        {/* SECTION 2: FEATURES */}
        <section className="border-b border-white/10 py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            {/* Unified Section Title Spacing */}
            <div className="mb-16">
                <h2 className="text-[5vw] leading-[0.85] font-black uppercase tracking-tighter text-white/20">
                    FEATURES
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
              {/* Feature 01 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">01 Immutable Code</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  Once deployed, your code becomes permanent and unalterable. Every version is cryptographically sealed for complete integrity.
                </p>
              </div>

              {/* Feature 02 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">02 Decentralized</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  Your code lives across a distributed network. No central authority can control, modify, or restrict access to your work.
                </p>
              </div>

              {/* Feature 03 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">03 Tamper Proof</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  Advanced cryptographic validation ensures every line remains exactly as intended. Modifications are instantly rejected.
                </p>
              </div>



              {/* Feature 04 */}
          

                  <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">04 Immutable Package Manager</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  A resilient, tamper-proof package registry built for the next web. No central authority. Immutable deployments. Cryptographically verified.
                </p>
              </div>



               {/* Feature 05 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">05 MCP Registry</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  A central registry of MCP servers  that can be cloned and used with llms
                </p>
              </div>


               {/* Feature 06 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">06 App Builder</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  Built-in AI  based Node js App  builder (currently supports simple node js apps)
                  More language support will be added soon
                </p>
              </div>

                  {/* Feature 07 */}
              <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">07 Code Review</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  PM: The decentralized node package manager and registry that secures your software supply chain
                </p>
              </div>



                   {/* Feature 08 */}
             
              
    <div className="p-12 border-b border-r border-white/10 hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-bold uppercase mb-6 text-white tracking-tighter">08 Takedown Resistant</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans">
                  Your code cannot be censored or removed. It persists indefinitely across the network, providing true permanence.
                </p>
              </div>






            </div>
          </div>
        </section>


      <div>

       <MHero/>

      </div>
        

        <div>
          <IPMRegistryHero/>
        </div>


        <div>

          <MCPHero/>
        </div>


        <div>

          <ImmutablePromptsHero/>
        </div>

        <div>

          <AppBuilderHero/>
        </div>


        <div>

        <CodeReviewHero/>
        </div>


        <div>

          <ImmutableAgentsHero/>
        </div>


        

    

        <div>
     <AcceleratorHero/>

        </div>

        
       

        {/* SECTION 3: ROADMAP */}
        <section className="py-24 md:py-32 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16"
            >
                
            </div>
            <TimelineRoadmap />
          </div>
        </section>



         


        <section className="py-24 md:py-32 border-b bg-black border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                
            </div>
            <DocsSection/>
          </div>
        </section>

         <section className="py-24 md:py-32 border-b bg-black border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                
            </div>
            <IPMDocsSection/>
          </div>
        </section>
         
         <footer>
          <Footer/>
         </footer>
       
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');
        
        body {
          font-family: 'Space Grotesk', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #fff;
        }
      `}</style>
    </div>
  );
}