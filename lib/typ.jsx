import React, { useState, useEffect } from 'react';

const TypingDiv = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0); // Tracks which word we are on
  const [speed, setSpeed] = useState(150);

  const words = ["Resilience", "Innovation", "Precision", "Integrity"];
  const pauseTime = 2000; // Time the full word stays visible

  useEffect(() => {
    const currentWord = words[index % words.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing logic
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150); // Standard typing speed
        
        if (text === currentWord) {
          setIsDeleting(true);
          setSpeed(pauseTime); // Wait before starting to delete
        }
      } else {
        // Deleting logic
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(75); // Faster when deleting
        
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1); // Move to next word
          setSpeed(500); // Short pause before starting new word
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, speed]);

  return (
    <div className="block text-4xl md:text-5xl font-black text-indigo-500 uppercase tracking-tighter">
      <p>
        <span className="relative">
          {text}
          {/* Modern Blinking Cursor */}
          <span className="ml-1 border-r-4 border-indigo-500 animate-pulse"></span>
        </span>
        <span className="text-gray-300 ml-3">FOR LOGIC THAT MATTERS</span>
      </p>
    </div>
  );
};

export default TypingDiv;