"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Shield, Activity, Zap, Cpu, ChevronRight, Globe, Lock } from "lucide-react";

const Hero = () => {
  // --- PARALLAX EFFECT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = e.clientX - rect.left;
    const mouseYRelative = e.clientY - rect.top;
    x.set(mouseXRelative / width - 0.5);
    y.set(mouseYRelative / height - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#020202] p-4 md:p-8 overflow-hidden cursor-default"
    >
      {/* --- ANIMATED GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e40af15_0%,transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        {/* Moving Scanline */}
        <motion.div 
          animate={{ translateY: ["0vh", "100vh"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10 opacity-20"
        />
      </div>

      {/* --- MAIN HUD FRAME --- */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-6xl border border-blue-500/30 bg-black/60 backdrop-blur-2xl rounded-sm shadow-[0_0_100px_-20px_rgba(30,64,175,0.5)]"
      >
        {/* Top Status Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-blue-500/30 bg-blue-900/10">
          <div className="flex items-center gap-6">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-950 border border-blue-500/50" />
            </div>
            <div className="hidden md:flex gap-4 font-mono text-[10px] tracking-[0.2em] text-blue-400/60 uppercase">
              
            </div>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-2">
               <div className="w-1 h-1 bg-emerald-500 rounded-full" /> 
              
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Panel: Performance Metrics */}
          <div className="lg:col-span-3 border-r border-blue-500/10 p-6 flex flex-col gap-10 bg-blue-500/[0.02]">
           
            
            <div className="mt-auto pt-6 border-t border-blue-500/10">
              <p className="text-[9px] font-mono text-blue-500/40 uppercase mb-3"></p>
              <div className="grid grid-cols-5 gap-1">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                    className="h-4 bg-blue-500/20 border border-blue-500/20"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel: Branding & CTA */}
          <div className="lg:col-span-6 py-20 px-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 px-3 py-1 border border-blue-500/40 bg-blue-500/10 rounded-full"
            >
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]"></span>
            </motion.div>

            <h1 className="font-black">
              <span className="block text-white text-5xl">IMMUTABLE</span>
              <span className="block text-indigo-500 text-5xl">
                DECENTRALIZED
              </span>
            </h1>

            <p className="text-blue-200/60 text-sm font-mono max-w-sm mb-12 leading-relaxed">
              Decentralized infrastructure engineered for high-frequency data sovereignty and trustless verification.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
             
              
            </div>
          </div>

          {/* Right Panel: Terminal Stream */}
          <div className="lg:col-span-3 border-l border-blue-500/10 p-6 bg-black/40">
           
            
            

            <div className="mt-20">
              <div className="flex justify-between items-end mb-2">
               
              </div>
              <div className="h-1 w-full bg-blue-900/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "64%" }}
                  className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Capability Footer */}
        <div className="border-t border-blue-500/20 bg-blue-950/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500/10">
           <FooterCell icon={<Shield size={16}/>} label="SECURE" />
           <FooterCell icon={<Zap size={16}/>} label="INSTANT" />
           <FooterCell icon={<Cpu size={16}/>} label="SCALABLE" />
           <FooterCell icon={<Cpu size={16}/>} label="PERMANENT" />

        </div>
      </motion.div>
    </section>
  );
};

// --- SUBCOMPONENTS ---



const LogItem = ({ time, status, msg, color = "text-blue-200/40" }) => (
  <div className="text-[9px] leading-tight">
    <span className="text-blue-500/40">{time}</span>
    <span className="mx-2 text-blue-400">[{status}]</span>
    <span className={color}>{msg}</span>
  </div>
);

const FooterCell = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-6 hover:bg-blue-500/5 transition-all cursor-pointer group">
    <div className="text-blue-500/40 group-hover:text-blue-400 group-hover:scale-110 transition-all">{icon}</div>
    <span className="text-[10px] font-mono font-bold text-blue-500/30 group-hover:text-blue-200 tracking-[0.2em]">{label}</span>
  </div>
);

export default Hero;