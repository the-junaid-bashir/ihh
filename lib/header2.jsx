"use client";

import React, { useState, useEffect } from 'react';
import { detectWallets, getGeolocationData, VelocityAuth } from "ihubinternal";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles, GithubIcon, Martini, Key, Code, Terminal, Server, TrendingUp, Cpu, Users } from "lucide-react";
import TypingDiv from "@/lib/typ";
import { useRouter } from "next/navigation";
const Header2 = () => {
  // --- Typing Logic for "Hub" ---
  const [text, setText] = useState("Hub");
  const words = ["Code","Data"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

   const router = useRouter();


  useEffect(() => {
    const currentWord = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }

    }, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

/*
   useEffect(() => {
    setToken(localStorage.getItem("vjwt"));
     if(token !=null){

      router.replace("/dashboard")

    }
  }, []);

*/  
  useEffect(() => {
  const t = localStorage.getItem("vjwt");

  if (t) {
    router.replace("/dashboard");
  }
}, []);




  const navLinkClasses = "text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group";




  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Logo with Typing Animation */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold tracking-tight text-white flex items-center">
            <span>Immutable</span>
            <span className="text-blue-500 ml-1">Hub</span>
            <span className="w-[2px] h-6 bg-blue-500 ml-1 animate-pulse" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="https://github.com/immutablehub" className={navLinkClasses}>
            <GithubIcon  className='w-6 h-6'/>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
          </a>

          <a href={process.env.NEXT_PUBLIC_TELEGRAM} className={navLinkClasses}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.307.02.473z"/>
                </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
          </a>

           <a href="https://x.com/ImmutableHub" className={navLinkClasses}>
           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full" />
          </a>

         
          
          {/* Social Icon */}
          <a 
            href="https://www.npmjs.com/~immutablehub" 
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all hover:-translate-y-1"
            aria-label="NPM"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
            </svg>
          </a>
        </nav>

      
        </div>
    
    </header>
  );
};

export default Header2;