import { motion } from 'framer-motion';

interface AnimatedCharacterProps {
  isSpeaking: boolean;
  className?: string;
}

export const AnimatedCharacter = ({ isSpeaking, className = '' }: AnimatedCharacterProps) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Character Body */}
      <svg viewBox="0 0 200 300" className="w-full h-full">
        {/* Shadow */}
        <ellipse cx="100" cy="290" rx="40" ry="8" fill="rgba(0,0,0,0.1)" />
        
        {/* Body */}
        <motion.g>
          {/* Torso */}
          <path
            d="M70 140 Q60 180 65 220 L135 220 Q140 180 130 140 Z"
            fill="#4F46E5"
            stroke="#3730A3"
            strokeWidth="2"
          />
          
          {/* Collar/Tie detail */}
          <path
            d="M95 140 L100 170 L105 140"
            fill="#EF4444"
            stroke="#DC2626"
            strokeWidth="1"
          />
          
          {/* Left Arm */}
          <motion.g
            animate={isSpeaking ? {
              rotate: [0, 10, 0, -5, 0],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ originX: 0.3, originY: 0.5 }}
          >
            <path
              d="M70 145 Q45 160 40 190 Q38 210 50 220"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Left Hand */}
            <circle cx="50" cy="222" r="10" fill="#FBBF24" />
          </motion.g>
          
          {/* Right Arm - Pointing/Gesturing */}
          <motion.g
            animate={isSpeaking ? {
              rotate: [0, -15, 0, -10, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            style={{ originX: 0.7, originY: 0.5 }}
          >
            <path
              d="M130 145 Q155 150 165 170 Q175 190 160 210"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Right Hand */}
            <circle cx="158" cy="212" r="10" fill="#FBBF24" />
            {/* Pointing finger */}
            <motion.line
              x1="165"
              y1="208"
              x2="180"
              y2="200"
              stroke="#FBBF24"
              strokeWidth="6"
              strokeLinecap="round"
              animate={isSpeaking ? { x2: [180, 185, 180] } : {}}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.g>
          
          {/* Legs */}
          <path
            d="M80 220 L75 280 L85 280 L95 240 L105 280 L115 280 L120 220"
            fill="#1E3A5F"
            stroke="#0F172A"
            strokeWidth="2"
          />
          
          {/* Shoes */}
          <ellipse cx="80" cy="283" rx="12" ry="6" fill="#0F172A" />
          <ellipse cx="110" cy="283" rx="12" ry="6" fill="#0F172A" />
        </motion.g>
        
        {/* Head */}
        <motion.g
          animate={isSpeaking ? {
            y: [0, -2, 0, -1, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Face */}
          <circle cx="100" cy="90" r="50" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
          
          {/* Hair */}
          <path
            d="M55 70 Q60 30 100 25 Q140 30 145 70 Q140 50 100 45 Q60 50 55 70"
            fill="#1E3A5F"
          />
          <path
            d="M60 65 Q70 55 85 58"
            fill="none"
            stroke="#1E3A5F"
            strokeWidth="8"
            strokeLinecap="round"
          />
          
          {/* Eyes */}
          <motion.g
            animate={isSpeaking ? {
              scaleY: [1, 0.1, 1],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              times: [0, 0.05, 0.1],
            }}
          >
            <ellipse cx="80" cy="85" rx="8" ry="10" fill="white" />
            <ellipse cx="120" cy="85" rx="8" ry="10" fill="white" />
            <circle cx="82" cy="87" r="4" fill="#1E3A5F" />
            <circle cx="122" cy="87" r="4" fill="#1E3A5F" />
            {/* Eye shine */}
            <circle cx="84" cy="84" r="2" fill="white" />
            <circle cx="124" cy="84" r="2" fill="white" />
          </motion.g>
          
          {/* Eyebrows */}
          <motion.path
            d="M70 70 Q80 65 90 70"
            fill="none"
            stroke="#1E3A5F"
            strokeWidth="3"
            strokeLinecap="round"
            animate={isSpeaking ? { d: ["M70 70 Q80 65 90 70", "M70 68 Q80 62 90 68", "M70 70 Q80 65 90 70"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M110 70 Q120 65 130 70"
            fill="none"
            stroke="#1E3A5F"
            strokeWidth="3"
            strokeLinecap="round"
            animate={isSpeaking ? { d: ["M110 70 Q120 65 130 70", "M110 68 Q120 62 130 68", "M110 70 Q120 65 130 70"] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Mouth */}
          <motion.path
            d={isSpeaking ? "M85 115 Q100 130 115 115" : "M85 115 Q100 125 115 115"}
            fill="none"
            stroke="#DC2626"
            strokeWidth="4"
            strokeLinecap="round"
            animate={isSpeaking ? {
              d: [
                "M85 115 Q100 125 115 115",
                "M85 112 Q100 135 115 112",
                "M85 115 Q100 120 115 115",
                "M85 112 Q100 130 115 112",
                "M85 115 Q100 125 115 115",
              ]
            } : {}}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Cheeks */}
          <circle cx="65" cy="100" r="8" fill="#FCA5A5" opacity="0.5" />
          <circle cx="135" cy="100" r="8" fill="#FCA5A5" opacity="0.5" />
        </motion.g>
      </svg>
    </motion.div>
  );
};
