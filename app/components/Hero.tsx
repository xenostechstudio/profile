"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 150);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-48 pb-32">
      {/* Floating Text Below Navbar - Only rendered on client to avoid hydration mismatch */}
      {isVisible && (
        <div 
          className="fixed top-[68px] left-1/2 z-40 w-[98%] max-w-[1440px] flex justify-center pointer-events-none transition-all duration-300 ease-out"
          style={{ 
            opacity: scrollOpacity, 
            transform: `translate(-50%, ${(1 - scrollOpacity) * -10}px) scale(${0.98 + (scrollOpacity * 0.02)})` 
          }}
          suppressHydrationWarning
        >
          <div className="w-full bg-white/10 backdrop-blur-md border border-slate-200/20 py-2.5 rounded-full shadow-sm flex items-center justify-center gap-6 px-6 text-slate-600 text-xs md:text-sm font-medium tracking-wide" suppressHydrationWarning>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-[#1a1f26]">Available for new projects</span>
            </div>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">Custom Development</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">Cloud Infrastructure</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">UI/UX Design</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-emerald-600">24/7 Support</span>
          </div>
        </div>
      )}


      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      </div>

      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        {/* Main Heading & Subtext */}
        <div className={cn(
          "mb-12 transition-all duration-1000 ease-out flex flex-col items-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-4 mb-6 opacity-80">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#1a1f26]/50"></span>
            <span className="text-sm md:text-sm text-[#1a1f26] max-w-2xl leading-relaxed font-normal">
              Transform your business ideas into digital products
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1a1f26]/50"></span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-[#1a1f26] mb-8 leading-[1.1] tracking-tight max-w-5xl drop-shadow-sm">
            Software Solutions, <br />
            <span className="text-[#1a1f26]">Development, and </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1f26] to-slate-500">Innovation.</span>
          </h1>
        </div>
        
        {/* CTA Buttons */}
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 mb-8 justify-center transition-all duration-1000 ease-out delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Link 
            href="#portfolio"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#1a1f26] to-slate-700 text-white hover:opacity-90"
            )}
          >
            Project Overview
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Hero;
