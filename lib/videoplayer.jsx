import React, { useRef, useState, useEffect } from 'react';
import { Settings, Play, Pause, Shield, Activity, Maximize2 } from 'lucide-react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => setProgress((video.currentTime / video.duration) * 100);
      video.addEventListener('timeupdate', handleTimeUpdate);
      // Attempt autoplay (standard for hero videos)
      video.play().catch(() => setIsPlaying(false));
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 overflow-hidden font-sans">
      
      {/* GHOST BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <h1 className="text-[18vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter">
          IMMUTABLE
        </h1>
      </div>

      <div className="relative w-full max-w-6xl group">
        
        {/* TOP ACCENT (Matches Roadmap Style) */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-[#FF4500]" />
            <span className="text-[#FF4500] font-bold tracking-[0.4em] uppercase text-[10px]">
              
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] tracking-widest uppercase">
            <Activity size={12} className="text-[#FF4500] animate-pulse" />
            Node-Status: Active
          </div>
        </div>

        {/* PLAYER FRAME */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          
          <div className="relative aspect-video cursor-pointer" onClick={togglePlay}>
            
            <video
              ref={videoRef}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-1000"
              autoPlay
              loop
              muted // Still muted for autoplay compliance, but no UI controls for it
              playsInline
              src="/nvdc.mp4"
            />

            {/* CINEMATIC OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />
            
            {/* CORNER TECHNICAL DATA */}
            <div className="absolute top-8 left-8 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">
              <span className="text-[#FF4500]">●</span> Live_Latency: 22ms
            </div>

            {/* CENTER PLAY/PAUSE INDICATOR */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 transition-all duration-500 ${isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                {isPlaying ? <Pause className="text-white fill-white" size={32} /> : <Play className="text-white fill-white ml-1" size={32} />}
              </div>
            </div>

            {/* PROGRESS LINE */}
            <div className="absolute bottom-[72px] left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
              <div 
                className="h-full bg-[#FF4500] shadow-[0_0_15px_#FF4500] transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* THE WHITE BRANDING STRIP */}
            <div className="absolute bottom-0 left-0 right-0 bg-white px-10 py-5 flex items-center justify-between">
              
              

              {/* Center: Immutable Hub Logo */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <span className="text-2xl font-bold tracking-tighter">
                 
                </span>
              </div>

              {/* Right Side: Action Icons */}
              <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Settings size={20} />
                </button>
                <div className="h-6 w-[1px] bg-gray-200" />
                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Maximize2 size={20} />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER CAPTION */}
        <div className="mt-6 px-2 flex justify-between items-center opacity-30">
          <span className="text-[9px] font-mono text-white uppercase tracking-[0.3em]">
            <h1>ImmutableHub</h1>
          </span>
          <span className="text-[9px] font-mono text-white uppercase tracking-[0.3em]">
            © 2026 Immutable Hub
          </span>
        </div>
      </div>
    </div>
  );
}