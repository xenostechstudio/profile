interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function Logo({ 
  width = 210, 
  height = 60, 
  className = "",
  primaryColor = "#13bfb5",
  secondaryColor = "#13bfb5"
}: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 210 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Import Poppins font */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
            .logo-text { font-family: 'Poppins', sans-serif; }
          `}
        </style>
      </defs>
      
      {/* Fitted background capsule */}
      <rect 
        x="5" 
        y="10" 
        width="200" 
        height="40" 
        fill="#e3ffff" 
        rx="20" 
        ry="20"
      />
      
      {/* XENOSTECH text - bold with tight spacing */}
      <text 
        x="20" 
        y="35" 
        className="logo-text"
        fontSize="18" 
        fontWeight="700" 
        fill={primaryColor}
        letterSpacing="-1.2"
      >
        XENOSTECH
      </text>
      
      {/* STUDIO capsule background - very close to XENOSTECH */}
      <rect 
        x="125" 
        y="17" 
        width="70" 
        height="26" 
        fill={primaryColor} 
        rx="13" 
        ry="13"
      />
      
      {/* STUDIO text - light weight, white text with tight spacing */}
      <text 
        x="160" 
        y="35" 
        className="logo-text"
        fontSize="16" 
        fontWeight="300" 
        fill="white"
        letterSpacing="-0.8"
        textAnchor="middle"
      >
        STUDIO
      </text>
    </svg>
  );
}

// Alternative simple text-based logo with CSS styling
export function TextLogo({ 
  width = 250, 
  height = 50, 
  className = "",
  primaryColor = "#13bfb5",
  secondaryColor = "#0891b2"
}: LogoProps) {
  return (
    <div className={`${className} flex items-center`} style={{ width, height }}>
      <span 
        className="text-2xl md:text-3xl font-bold"
        style={{
          fontFamily: 'Poppins, sans-serif',
          background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.02em'
        }}
      >
        Xenostech Studio
      </span>
    </div>
  );
}
