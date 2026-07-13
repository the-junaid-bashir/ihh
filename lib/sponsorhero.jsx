import React from 'react';
import {Heart, ShieldCheck} from 'lucide-react';





// <div className="flex flex-wrap gap-4 pt-4">
  //            <button className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all uppercase text-sm tracking-widest">
    //            Explore Servers
      //        </button>
        //      <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest">
          //      Register MCP
            //  </button>
            //</div>


const SolanaQRCode = ({ size = 200 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* QR Data Pattern Background */}
    <rect width="100" height="100" fill="white" rx="4" />
    <path
      d="M10 10h18v18H10V10zm2 2v14h14V12H12zm2 2h10v10H14V14zm58-4h18v18H72V10zm2 2v14h14V12H74V12zm2 2h10v10H76V14zM10 72h18v18H10V72zm2 2v14h14V74H12V74zm2 2h10v10H14V76z"
      fill="black"
    />
    <path
      d="M34 10h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 4h4v4h-4v-4zm0 8h4v4h-4v-4zm-8 4h4v4h-4v-4zm-8 0h4v4h-4v-4zm-8 0h4v4h-4v-4zm-8 4h4v4h-4v-4zm16 8h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm0 8h4v4h-4v-4zm-8 8h4v4h-4v-4zm-8 0h4v4h-4v-4zm-8 0h4v4h-4v-4zm-8 0h4v4h-4v-4zm32-24h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm0 8h4v4h-4v-4zm0 8h4v4h-4v-4zm-8 8h4v4h-4v-4zm-16 0h4v4h-4v-4z"
      fill="black"
    />

    {/* Center Solana Logo Area */}
    <circle cx="50" cy="50" r="16" fill="white" stroke="white" strokeWidth="2" />
    
    {/* Solana "S" Symbol */}
    <g transform="translate(41, 44) scale(0.18)">
      <path
        d="M39.04 11.23a1.9 1.9 0 0 0-1.35-.55H4.27c-1.47 0-2.2 1.77-1.16 2.81l7.8 7.8c.36.36.85.56 1.35.56h33.43c1.47 0 2.2-1.77 1.16-2.8l-7.81-7.82zM4.27 45.31h33.43c.5 0 .99-.2 1.35-.56l7.81-7.81c1.04-1.04.31-2.81-1.16-2.81H12.27a1.9 1.9 0 0 0-1.35.56l-7.81 7.81c-1.04 1.04-.31 2.81 1.16 2.81zM45.73 21.43H12.3a1.9 1.9 0 0 0-1.35.56l-7.81 7.81c-1.04 1.04-.31 2.81 1.16 2.81h33.43c.5 0 .99-.2 1.35-.56l7.81-7.81c1.04-1.04.31-2.81-1.16-2.81z"
        fill="url(#solana-gradient)"
      />
    </g>

    <defs>
      <linearGradient id="solana-gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
    </defs>
  </svg>
);



const SponsorshipHero = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Text and Identity */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-xs tracking-widest uppercase">
              <Heart size={14} className="text-red-500 fill-red-500/20" />
              Support Open Source Development
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase">
              Fuel the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
              Tools you depend on 
              </span><br/>
              
            </h1>

            <p className="max-w-md text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
              The world's open source MCP infrastructure is built by independent developers. 
              Sponsorships give them the financial support they need to maintain the servers and code you ship with.
            
            </p>
            <div>
                 <div className="flex flex-wrap gap-4 pt-4">
                
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-white opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <button className="relative bg-white text-black px-8 py-4 font-bold transition-all uppercase text-sm tracking-widest cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
              
              <button className="border border-white/20 px-8 py-4 font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest">
                <a href='/sponsors'>Learn More</a>
              </button>

            </div>
            </div>

           
          </div>

          {/* Right Content: Visual "Sponsorship Terminal" */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent blur opacity-30"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              
              {/* Terminal Header */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">mcp_sponsor_portal.sh</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 space-y-4">
                
                {/* Visual QR Placeholder (Visual only, no logic to break) */}
                <div className="mt-6 flex flex-col items-center bg-white/5 border border-white/10 p-8 rounded-sm">
                  <div className="w-55 h-55 bg-white/10 flex items-center justify-center relative">
                    <SolanaQRCode/>
                  </div>
                  <p className="mt-4 text-[10px] text-gray-500 tracking-[0.3em] uppercase">SPONSORSHIP</p>
                </div>

                {/* Status Bar */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={12} className="text-green-500" />
                       Network: Solana Mainnet
                    </div>
                    <span>COMING SOON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SponsorshipHero;