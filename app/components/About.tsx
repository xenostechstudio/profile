"use client";

import { memo } from "react";
import {
  Code2,
  Cloud,
  Palette,
  Cog,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/app/providers/language";
import { translations } from "@/lib/translations";

const About = memo(function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const capabilityIcons = [Code2, Cloud, Palette, Cog, Compass, ShieldCheck];

  return (
    <section id="about" className="py-24 px-4 bg-slate-50 relative">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6">
        <div className="max-w-5xl">
          <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">
            {t.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-6 tracking-tight leading-[0.9]">
            {t.headline}
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-normal mb-12 max-w-3xl">
            {t.tagline}
          </p>

          {/* Capabilities Grid */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#1a1f26]/30" aria-hidden />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">
                {t.capabilitiesLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
              {t.capabilities.map((cap, idx) => {
                const Icon = capabilityIcons[idx];
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
        </div>
      </div>
    </section>
  );
});

export default About;
