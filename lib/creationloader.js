import { useState, useEffect } from 'react';

export const RepoLoader = ({ isCreating }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isCreating) {
      // Reset progress when starting
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          // Increment by random amounts to make it look "real"
          const increment = Math.floor(Math.random() * 15) + 5;
          return Math.min(prev + increment, 100);
        });
      }, 600); // Speed of updates

      return () => clearInterval(interval);
    }
  }, [isCreating]);

  if (!isCreating) return null;

  return (
    <div className="w-full max-w-md font-mono mb-6">
      <div className="flex justify-between mb-2 text-xs text-green-400">
        <span className="animate-pulse">SYSTEM_STATUS: CREATING_REPO...</span>
        <span>{progress}%</span>
      </div>
      
      {/* Progress Bar Container */}
      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden border border-gray-700">
        {/* Fill */}
        <div 
          className="h-full bg-green-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Sub-text detail */}
      <div className="mt-2 text-[10px] text-gray-500 uppercase tracking-widest">
        Initializing secure handshake... {progress > 40 && "Pushing manifest..."}
      </div>
    </div>
  );
};