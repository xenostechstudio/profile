"use client";

import { memo } from "react";
import {
  Mail,
  MessageSquare,
  Calendar,
  MapPin,
  Code2,
  Cloud,
  Palette,
  Cog,
  Compass,
  ShieldCheck,
} from "lucide-react";

const About = memo(function About() {
  const capabilities = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored web, mobile, and desktop apps built to fit your operations.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud architectures with DevOps best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces that are intuitive, accessible, and beautifully crafted.",
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline operations with intelligent workflow automation.",
    },
    {
      icon: Compass,
      title: "Strategic Consulting",
      description: "Strategic guidance to modernize your business technology.",
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & Support",
      description: "Ongoing support keeping your software performant and secure.",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Tailwind",
    "Figma",
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Clients Served" },
    { value: "24/7", label: "Support Coverage" },
    { value: "2020", label: "Established" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-slate-50 relative">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left: Studio Profile */}
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-6 tracking-tight leading-[0.9]">
              Who We Are
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-normal mb-12 max-w-2xl">
              Software studio building tools for ambitious teams. We craft custom applications,
              modernize infrastructure, and partner with clients on long-term digital
              transformation.
            </p>

            {/* Capabilities Grid */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#1a1f26]/30" aria-hidden />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                  What We Bring
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="bg-white p-6 hover:bg-slate-50 transition-colors group"
                    >
                      <Icon
                        className="w-6 h-6 text-[#1a1f26] mb-4 group-hover:text-[#13bfb5] transition-colors"
                        strokeWidth={1.5}
                      />
                      <h3 className="font-serif text-lg text-[#1a1f26] mb-2 tracking-tight">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {cap.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12 pb-12 border-b border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1a1f26]/30" aria-hidden />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 bg-white border border-slate-200 text-slate-600 font-medium hover:border-[#1a1f26] hover:text-[#1a1f26] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#13bfb5] text-sm leading-none">▸</span>
                    <span className="font-serif text-3xl md:text-4xl text-[#1a1f26] tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-white p-8 border border-slate-200 lg:sticky lg:top-32 h-fit">
              <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">
                Connect
              </span>
              <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-2 tracking-tight">
                Get in Touch
              </h3>
              <p className="text-slate-500 font-light mb-8">Ready to start your project?</p>

              <div className="space-y-6">
                <a href="mailto:hello@xenostechstudio.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#1a1f26] group-hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="text-[#1a1f26] font-medium">hello@xenostech.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#1a1f26] group-hover:text-white transition-colors duration-300">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp
                    </span>
                    <span className="text-[#1a1f26] font-medium">+62 812 3456 7890</span>
                  </div>
                </a>

                <a href="mailto:hello@xenostechstudio.com?subject=Consultation%20Request" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full group-hover:bg-[#13bfb5] group-hover:text-white transition-colors duration-300">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Consultation
                    </span>
                    <span className="text-[#1a1f26] font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-[#13bfb5]">
                      Book a 30-min call
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  Office
                </span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <p className="text-[#1a1f26] font-light">Jakarta, Indonesia (GMT+7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
