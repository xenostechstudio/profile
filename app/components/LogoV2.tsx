"use client";

import { useState, useEffect } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  animated?: boolean;
}

export function LogoIcon({ 
  size = 40, 
  className = "",
  rounded = true 
}: { size?: number; className?: string; rounded?: boolean }) {
  return (
    <div 
      className={`${className} relative overflow-hidden ${rounded ? 'rounded-full' : ''}`} 
      style={{ height: size, width: size }}
      suppressHydrationWarning
    >
      <img 
        src="/logo.png" 
        alt="X" 
        className="h-full w-full object-cover"
        suppressHydrationWarning
      />
    </div>
  );
}

export function LogoText({ 
  width = 160, 
  height = 40, 
  className = "",
  primaryColor = "#ffffff",
  secondaryColor = "#ffffff"
}: { width?: number; height?: number; className?: string; primaryColor?: string; secondaryColor?: string }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      suppressHydrationWarning
    >
      <defs>
        <style>
          {`
            .logo-text-bold { font-family: var(--font-poppins), sans-serif; font-weight: 700; }
            .logo-text-light { font-family: var(--font-poppins), sans-serif; font-weight: 300; }
          `}
        </style>
      </defs>
      
      <text 
        x="0" 
        y={height * 0.45} 
        className="logo-text-bold"
        fontSize={height * 0.4} 
        fill={primaryColor}
        letterSpacing="-0.02em"
      >
        XENOSTECH
      </text>
      <text 
        x="0" 
        y={height * 0.78} 
        className="logo-text-light"
        fontSize={height * 0.22} 
        fill={secondaryColor}
        letterSpacing="0.4em"
        style={{ opacity: 0.9 }}
      >
        STUDIO
      </text>
    </svg>
  );
}

export default function LogoV2({ 
  width = 300, 
  height = 80, 
  className = "",
  primaryColor = "#ffffff",
  secondaryColor = "#ffffff",
  animated = false
}: LogoProps) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setOpacity(1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setOpacity(1);
    }
  }, [animated]);

  const iconSize = height * 0.8;

  return (
    <div className={`${className} flex items-center gap-3`} style={{ opacity: animated ? opacity : 1, transition: 'opacity 1s ease-out' }} suppressHydrationWarning>
      <LogoIcon size={iconSize} />
      <LogoText width={width - iconSize - 12} height={height} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
}
