"use client";

import { memo, useEffect, useState } from "react";
import Logo from "./Logo";
import TypingText from "./TypingText";
import TypingWords from "./TypingWords";

const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#13bfb5] opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#60a5fa] opacity-15 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-[#13bfb5] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-[#60a5fa] opacity-10 rounded-lg rotate-12 animate-bounce"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#13bfb5] to-[#60a5fa] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#60a5fa] to-[#13bfb5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo with typing animation */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <Logo 
                width={320} 
                height={80}
                className="mb-4 transition-transform duration-300 group-hover:scale-105"
                animated={true}
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg -z-10"></div>
            </div>
          </div>
          <h1 className="sr-only">Xenostech Studio</h1>
        </div>

        {/* Main content with staggered animations */}
        <div className={`mb-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <TypingWords 
              words={[
                { word: "Transform" },
                { word: "Build" },
                { word: "Develop" }
              ]}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              typingSpeed={100}
              deletingSpeed={70}
              wordPauseTime={2000}
              pauseTime={800}
            /> Your Ideas Into
            <span className="block bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] bg-clip-text text-transparent animate-pulse">
              Digital Reality
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft innovative software solutions that drive business growth. From consultation to deployment, 
            we're your trusted partner in digital transformation.
          </p>
        </div>
        
        {/* CTA Buttons with enhanced animations */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#13bfb5] to-[#0ea5a5] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5a5] to-[#13bfb5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group relative px-8 py-4 border-2 border-[#13bfb5] text-[#13bfb5] rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Stats with staggered animations */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 group cursor-pointer">
              <div className="text-3xl font-bold text-[#13bfb5] mb-2 transition-transform duration-300 group-hover:scale-110">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
            </div>
            <div className="p-6 group cursor-pointer">
              <div className="text-3xl font-bold text-[#13bfb5] mb-2 transition-transform duration-300 group-hover:scale-110">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
            <div className="p-6 group cursor-pointer">
              <div className="text-3xl font-bold text-[#13bfb5] mb-2 transition-transform duration-300 group-hover:scale-110">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
