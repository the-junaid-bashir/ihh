import React, { useState } from 'react';
import { Copy, Check, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImmutableContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const address = process.env.NEXT_PUBLIC_CA || "0x0000000000000000000000000000000000000000";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full bg-transparent">
      {/* Top Label - Matching the Video Player Typography */}
      <div className="flex items-center gap-2 mb-3 self-center">
        <Shield size={12} className="text-[#FF4500]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          Official Protocol <span className="text-white/80">Registry</span>
        </span>
      </div>

      {/* Main Bar: Solid, Clean, Professional */}
      <div className="group relative flex items-center w-full max-w-2xl bg-[#0d1117] border border-gray-800 rounded-xl p-1.5 transition-all duration-300 hover:border-gray-700">
        
        {/* Address Text - Monospaced but readable */}
        <div className="flex-1 px-5 py-2 overflow-hidden">
          <p className="text-gray-400 font-mono text-sm tracking-tight truncate group-hover:text-gray-200 transition-colors">
            {address}
          </p>
        </div>

        {/* Action Button: Matches the "Unmute" button style */}
        <button 
          onClick={handleCopy}
          className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg ${
            copied ? 'bg-green-600 text-white' : 'bg-indigo-500 text-white hover:bg-[#ff5714]'
          }`}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div 
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <span>Verified</span>
                <Check size={14} strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div 
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2"
              >
                <span>Copy CA</span>
                <Copy size={14} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      
      {/* Sub-label: Clean grey text */}
      <div className="mt-4 flex gap-6">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Mainnet Live</span>
        </div>
        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest opacity-50">Verified Immutable Hub Contract</span>
      </div>
    </div>
  );
};

export default ImmutableContractAddress;