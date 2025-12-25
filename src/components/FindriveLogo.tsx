interface FindriveLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function FindriveLogo({ className = "", size = "md" }: FindriveLogoProps) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 52 },
    lg: { width: 200, height: 65 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`relative group ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        {/* Decorative art deco lines */}
        <path
          d="M0 32.5h15M185 32.5h15"
          stroke="url(#gold-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Left decorative element - vintage razor blade inspired */}
        <path
          d="M18 25L28 32.5L18 40"
          stroke="url(#gold-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Right decorative element */}
        <path
          d="M182 25L172 32.5L182 40"
          stroke="url(#gold-gradient)"
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
          fill="url(#gold-gradient)"
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
          stroke="url(#gold-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        
        {/* Bottom decorative line */}
        <path
          d="M35 60h130"
          stroke="url(#gold-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Corner accents - art deco style */}
        <path
          d="M35 15L35 20M165 15L165 20M35 60L35 55M165 60L165 55"
          stroke="url(#gold-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(43 96% 56%)" />
            <stop offset="50%" stopColor="hsl(38 92% 50%)" />
            <stop offset="100%" stopColor="hsl(32 88% 45%)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Shimmer overlay - only visible on hover */}
      <div className="absolute inset-0 overflow-hidden rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
