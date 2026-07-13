"use client";

import { useState } from "react";

import Header2 from "./header2";
import SearchTerminal from "./search";

export default function RegistryPackageView() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install @core/accelerator-sdk";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      <Header2 />

      {/* Background Grid - Consistent with your theme */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-0">
        
        {/* Package Header */}

          <SearchTerminal/>
          

        </div>
      </div>
  );
}