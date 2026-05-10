"use client";

import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Cog, Cloud, LineChart, ShieldCheck, Rocket } from "lucide-react";
import { useLanguage } from "@/app/providers/language";
import { translations } from "@/lib/translations";

const Services = memo(function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].services;

  const accents = ["#1a1f26", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];
  const icons = [Code2, Cog, Cloud, LineChart, ShieldCheck, Rocket];

  const services = t.list;

  return (
    <section id="services" className="py-2 bg-white relative overflow-hidden">
      <div className="w-[93%] mx-auto relative z-10 border border-slate-300 p-1 rounded-none">
        <div className="border border-slate-200 p-1 rounded-none">
          <div className="bg-white rounded-none border border-slate-100 py-8 md:py-12 lg:py-16">

            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="text-left mb-12">
                <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">{t.eyebrow}</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
                  {t.headline}
                </h2>
                <p className="text-lg text-[#1a1f26] max-w-2xl leading-relaxed font-light">
                  {t.tagline}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div
                  className="w-full lg:w-1/3 flex flex-col gap-2"
                  role="tablist"
                  aria-orientation="vertical"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      setActiveTab((prev) => (prev + 1) % services.length);
                    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      setActiveTab((prev) => (prev - 1 + services.length) % services.length);
                    }
                  }}
                >
                  {services.map((service, index) => {
                    const Icon = icons[index];
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`service-panel-${index}`}
                        id={`service-tab-${index}`}
                        tabIndex={activeTab === index ? 0 : -1}
                        className={cn(
                          "relative flex items-center gap-4 p-5 rounded-none text-left transition-all duration-300 group border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300",
                          activeTab === index
                            ? "bg-slate-50 border-slate-200 shadow-sm text-[#1a1f26] font-medium"
                            : "text-slate-500 hover:bg-slate-50/50 hover:text-[#1a1f26]"
                        )}
                      >
                        {activeTab === index && (
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-0 bottom-0 w-1"
                            style={{ backgroundColor: accents[index % accents.length] }}
                          />
                        )}
                        <div className="flex-shrink-0">
                          <Icon
                            size={22}
                            strokeWidth={1.5}
                            className={cn(
                              "transition-colors duration-300",
                              activeTab === index ? "text-[#1a1f26]" : "text-slate-400 group-hover:text-[#1a1f26]"
                            )}
                          />
                        </div>
                        <span className="text-lg tracking-tight">{service.title}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="w-full lg:w-2/3">
                  <div
                    className="relative h-full min-h-[400px] rounded-none bg-[#f8fafc] p-8 md:p-12 overflow-hidden border border-slate-100/50"
                    role="tabpanel"
                    id={`service-panel-${activeTab}`}
                    aria-labelledby={`service-tab-${activeTab}`}
                    style={{ borderTopWidth: 4, borderTopColor: accents[activeTab % accents.length] }}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div>
                        <h3 key={activeTab} className="text-2xl md:text-3xl font-serif font-medium text-[#1a1f26] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500 tracking-tight">
                          {services[activeTab].title}
                        </h3>

                        <p key={activeTab + 'desc'} className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100 font-normal">
                          {services[activeTab].detailedDesc}
                        </p>

                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                          {t.keyFeatures}
                        </div>
                        <div key={activeTab + 'features'} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                          {services[activeTab].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accents[activeTab % accents.length] }}></div>
                              <span className="tracking-wide">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
