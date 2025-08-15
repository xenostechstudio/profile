"use client";

import { memo } from "react";
import Logo from "./Logo";

const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-50 dark:to-gray-950 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <Logo 
              width={280} 
              height={70}
              className="mb-4"
            />
          </div>
          <h1 className="sr-only">Xenostech Studio</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business ideas into powerful applications. We specialize in custom software development 
            and consulting services tailored to your unique business needs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Project
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            View Our Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
});

export default Hero;
