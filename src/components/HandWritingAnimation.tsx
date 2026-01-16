import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HandWritingAnimationProps {
  text: string;
  isActive: boolean;
  className?: string;
}

export const HandWritingAnimation = ({ text, isActive, className = '' }: HandWritingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      return;
    }

    setDisplayedText('');
    setCurrentIndex(0);
  }, [text, isActive]);

  useEffect(() => {
    if (!isActive || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 30); // Speed of typing

    return () => clearTimeout(timer);
  }, [currentIndex, text, isActive]);

  return (
    <div className={`relative ${className}`}>
      {/* Text display area */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10">
        {/* Notebook lines effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-blue-100"
              style={{ top: `${(i + 1) * 28 + 20}px` }}
            />
          ))}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-red-200" />
        </div>
        
        {/* Animated text */}
        <motion.p 
          className="relative text-foreground text-lg leading-relaxed font-medium pl-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayedText}
          {isActive && currentIndex < text.length && (
            <motion.span
              className="inline-block w-0.5 h-5 bg-primary ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </motion.p>
      </div>

      {/* Animated hand/pencil */}
      {isActive && currentIndex < text.length && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            right: '-20px',
            bottom: '-30px',
          }}
          animate={{
            x: [0, 5, 0, -3, 0],
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
          }}
        >
          <svg width="60" height="80" viewBox="0 0 60 80">
            {/* Pencil */}
            <motion.g
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 0.2, repeat: Infinity }}
              style={{ originX: 0.5, originY: 1 }}
            >
              {/* Pencil body */}
              <rect x="25" y="10" width="10" height="50" fill="#F59E0B" rx="1" />
              {/* Pencil tip */}
              <polygon points="25,60 35,60 30,75" fill="#FBBF24" />
              <polygon points="28,68 32,68 30,75" fill="#1E3A5F" />
              {/* Pencil top */}
              <rect x="25" y="5" width="10" height="8" fill="#EC4899" rx="1" />
              {/* Metal band */}
              <rect x="24" y="8" width="12" height="4" fill="#9CA3AF" />
              {/* Wood texture lines */}
              <line x1="27" y1="15" x2="27" y2="55" stroke="#D97706" strokeWidth="0.5" />
              <line x1="33" y1="15" x2="33" y2="55" stroke="#D97706" strokeWidth="0.5" />
            </motion.g>
            
            {/* Hand holding pencil */}
            <g>
              {/* Thumb */}
              <ellipse cx="40" cy="35" rx="8" ry="12" fill="#FBBF24" />
              {/* Fingers */}
              <ellipse cx="22" cy="40" rx="6" ry="10" fill="#FBBF24" />
              <ellipse cx="18" cy="45" rx="5" ry="9" fill="#FBBF24" />
              {/* Palm */}
              <ellipse cx="30" cy="45" rx="15" ry="12" fill="#FBBF24" />
            </g>
          </svg>
        </motion.div>
      )}
    </div>
  );
};
