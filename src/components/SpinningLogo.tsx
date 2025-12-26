import { useEffect, useState } from "react";

interface SpinningLogoProps {
  onComplete: () => void;
}

export function SpinningLogo({ onComplete }: SpinningLogoProps) {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
      setTimeout(onComplete, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-300 ${
        !isSpinning ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinning Logo Container */}
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-primary/20 animate-[spin_3s_linear_infinite]" />
          
          {/* Inner spinning element */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-gold-dark/20 flex items-center justify-center animate-[spin_1.5s_ease-in-out_infinite]">
            <svg
              width="120"
              height="60"
              viewBox="0 0 200 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Decorative art deco lines */}
              <path
                d="M0 32.5h15M185 32.5h15"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Left decorative element */}
              <path
                d="M18 25L28 32.5L18 40"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              
              {/* Right decorative element */}
              <path
                d="M182 25L172 32.5L182 40"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Main text - FINDRIVE */}
              <text
                x="100"
                y="38"
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontSize="28"
                fontWeight="700"
                fill="url(#spin-gold-gradient)"
                letterSpacing="4"
              >
                FINDRIVE
              </text>

              {/* Tagline */}
              <text
                x="100"
                y="54"
                textAnchor="middle"
                fontFamily="'Inter', sans-serif"
                fontSize="8"
                fontWeight="500"
                fill="hsl(38 50% 55%)"
                letterSpacing="3"
              >
                DRIVEN BY FINANCE
              </text>

              {/* Top decorative line */}
              <path
                d="M35 15h130"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              
              {/* Bottom decorative line */}
              <path
                d="M35 60h130"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Corner accents */}
              <path
                d="M35 15L35 20M165 15L165 20M35 60L35 55M165 60L165 55"
                stroke="url(#spin-gold-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="spin-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(43 96% 56%)" />
                  <stop offset="50%" stopColor="hsl(38 92% 50%)" />
                  <stop offset="100%" stopColor="hsl(32 88% 45%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 w-40 h-40 rounded-full bg-primary/20 blur-xl animate-pulse" />
        </div>

        {/* Loading text */}
        <p className="text-muted-foreground text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
