"use client";

import { memo } from "react";

const About = memo(function About() {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "30+", label: "Clients" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-50">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
            About Xenostech Studio
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-normal">
            We are a team of passionate developers and consultants dedicated to transforming businesses through innovative technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Philosophy */}
          <div className="bg-white p-8 border border-slate-200 hover:border-slate-300 transition-colors duration-300">
            <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-4">Our Philosophy</h3>
            <p className="text-slate-500 leading-relaxed font-light mb-8">
              We believe in the power of simplicity. Our solutions are designed to be intuitive, scalable, and effective, removing complexity from your business processes.
            </p>
            <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 text-2xl">
              💡
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="bg-white p-8 border border-slate-200 hover:border-slate-300 transition-colors duration-300">
            <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed font-light mb-8">
              To empower businesses with technology that drives growth. We focus on delivering high-quality, sustainable software that stands the test of time.
            </p>
            <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-100 text-2xl">
              🚀
            </div>
          </div>

          {/* Card 3: Impact/Stats */}
          <div className="bg-[#1a1f26] p-8 border border-[#1a1f26] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-normal mb-8">Our Impact</h3>
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-3xl font-serif">{stat.value}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm font-light italic">
                "Building the future, one line of code at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
