"use client";

import { memo } from "react";
import { useLanguage } from "@/app/providers/language";
import { translations } from "@/lib/translations";

const Workflow = memo(function Workflow() {
  const { language } = useLanguage();
  const t = translations[language].workflow;

  return (
    <section id="workflow" className="py-24 bg-white relative overflow-hidden">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-left mb-12">
          <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">{t.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
            {t.headline}
          </h2>
          <p className="text-lg text-[#1a1f26] max-w-2xl leading-relaxed font-light">
            {t.tagline}
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[320px] snap-center group relative bg-[#f4f7f6] p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <span className="text-6xl font-serif text-slate-200 group-hover:text-slate-100 transition-colors duration-300 block mb-4">
                  {step.step}
                </span>

                <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {step.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-lg font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Workflow;
