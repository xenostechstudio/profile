"use client";

import { memo } from "react";
import { Mail, MessageSquare, Calendar } from "lucide-react";

const About = memo(function About() {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "30+", label: "Clients" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-50 relative">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: About Content */}
          <div className="flex-1">
            <div className="mb-12">
              <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-6 tracking-tight leading-[0.9]">
                Who We Are
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-normal mb-8">
                We are a team of passionate developers and consultants dedicated to transforming businesses through innovative technology.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1a1f26] mb-2">Our Philosophy</h3>
                  <p className="text-slate-500 leading-relaxed font-light">
                    We believe in the power of simplicity. Our solutions are designed to be intuitive, scalable, and effective, removing complexity from your business processes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1a1f26] mb-2">Our Mission</h3>
                  <p className="text-slate-500 leading-relaxed font-light">
                    To empower businesses with technology that drives growth. We focus on delivering high-quality, sustainable software that stands the test of time.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-slate-200">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="block text-3xl md:text-4xl font-serif text-[#1a1f26] mb-1">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Minimal Contact */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-white p-8 border border-slate-200 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-2">Get in Touch</h3>
                <p className="text-slate-500 font-light mb-8">Ready to start your project?</p>
                
                <div className="space-y-6">
                  <a href="mailto:hello@xenostechstudio.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#1a1f26] group-hover:text-white transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
                      <span className="text-[#1a1f26] font-medium">hello@xenostech.com</span>
                    </div>
                  </a>

                  <a href="https://wa.me/6281234567890" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#1a1f26] group-hover:text-white transition-colors duration-300">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
                      <span className="text-[#1a1f26] font-medium">+62 812 3456 7890</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#1a1f26] group-hover:text-white transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Consultation</span>
                      <span className="text-[#1a1f26] font-medium underline decoration-slate-300 underline-offset-4">Book a 30-min call</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Office</span>
                <p className="text-[#1a1f26] font-light">Jakarta, Indonesia (GMT+7)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default About;
