import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TimelineRoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    { id: 1, label: 'Phase 01', title: 'Foundation & Automation' },
    { id: 2, label: 'Phase 02', title: 'Industry Integrity' },
    { id: 3, label: 'Phase 03', title: 'Enterprise Scaling' },
  ];

  const features = [
    { 
      title: 'Automate Any Workflow', 
      description: 'Intuitive visual builder for creating custom CI/CD pipelines, testing, and deployment workflows, triggered by code events or schedules.', 
      details: ['Visual Builder', 'Event-based', 'Action Templates'], 
      phase: 1,
      order: 1
    },
    { 
      title: 'External Tools Integration', 
      description: 'Seamlessly connect and manage third-party development tools like external CI/CD platforms and monitoring systems.', 
      details: ['Open API', 'Marketplace', 'Unified Dashboard'], 
      phase: 1,
      order: 2
    },
    { 
      title: 'Healthcare Software Integrity',
      description: 'Tamper-proof software history for healthcare systems where safety, compliance, and traceability are critical.',
      details: ['Audit Trails', 'Release Lineage', 'Malicious Protection'],
      phase: 2,
      order: 1
    },
    {
      title: 'Financial Services Security',
      description: 'Protocol-level immutability for financial applications to prevent fraud, backdoors, and unauthorized changes.',
      details: ['Cryptographic Proof', 'Long-term Compliance', 'Risk Elimination'],
      phase: 3,
      order: 1
    },
  ];

  const filteredFeatures = features.filter(f => f.phase === activePhase);

  return (
    <section className="min-h-screen bg-[#010409] text-[#e6edf3] py-24 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#FF4500]" />
            <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-xs">Project Growth</span>
          </div>
          <h1 className="text-7xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-6">
            ROAD<span className="text-white/10">MAP</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
            Building the future of development through <span className="text-gray-300">immutable protocols</span> and intelligent automation.
          </p>
        </header>

        {/* Phase Navigation */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-white/5">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`pb-6 px-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                activePhase === phase.id ? 'text-[#FF4500]' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {phase.label}
              {activePhase === phase.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF4500]" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[21px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#FF4500] via-gray-800 to-transparent opacity-30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {filteredFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-10 group">
                  {/* The Node Dot */}
                  <div className="relative mt-2">
                    <div className="w-[44px] h-[44px] rounded-xl bg-[#0d1117] border border-gray-800 flex items-center justify-center z-10 relative group-hover:border-[#FF4500] transition-colors">
                      <span className="text-xs font-black text-gray-500 group-hover:text-[#FF4500]">0{feature.order}</span>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1 pb-12 border-b border-white/5">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                      {feature.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {feature.details.map((detail, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:border-[#FF4500]/30 group-hover:text-gray-200 transition-all"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TimelineRoadmap;