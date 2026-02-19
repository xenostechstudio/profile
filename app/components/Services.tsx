"use client";

import { memo, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code2, Cog, Cloud, LineChart, ShieldCheck, Rocket, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const Services = memo(function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const accents = ["#1a1f26", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

  const services = [
    {
      icon: Code2,
      title: "Custom Application Development",
      description: "Build tailored software solutions that perfectly match your business processes and requirements.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      detailedDesc: "We craft robust, scalable, and secure applications tailored to your unique business needs. From initial concept to final deployment, our team ensures every line of code adds value to your operations."
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Streamline your operations with intelligent automation solutions that save time and reduce costs.",
      features: ["Workflow Automation", "Data Integration", "Process Optimization", "System Integration"],
      detailedDesc: "Eliminate repetitive tasks and reduce human error with our advanced automation solutions. We integrate disparate systems to create a cohesive ecosystem that works 24/7 for your business."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Infrastructure",
      description: "Modern, scalable cloud architectures that grow with your business needs.",
      features: ["Cloud Migration", "DevOps Setup", "Infrastructure Design", "Performance Optimization"],
      detailedDesc: "Leverage the power of the cloud with our expert infrastructure services. Whether you need migration support, serverless architecture, or DevOps implementation, we ensure high availability and security."
    },
    {
      icon: LineChart,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business and leverage technology effectively.",
      features: ["Technology Strategy", "Digital Roadmaps", "System Architecture", "Best Practices"],
      detailedDesc: "Navigate the digital landscape with confidence. Our consultants analyze your current setup and provide actionable roadmaps to adopt cutting-edge technologies that drive growth."
    },
    {
      icon: ShieldCheck,
      title: "Software Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      features: ["Bug Fixes", "Performance Tuning", "Security Updates", "Feature Enhancements"],
      detailedDesc: "Ensure your software remains performant and secure with our dedicated support packages. We monitor, update, and optimize your applications so you can focus on your core business."
    },
    {
      icon: Rocket,
      title: "MVP & Prototype Development",
      description: "Rapid development of minimum viable products to validate your ideas quickly.",
      features: ["Proof of Concept", "Market Validation", "Rapid Prototyping", "Iterative Development"],
      detailedDesc: "Turn your visionary ideas into reality fast. We build functional MVPs that allow you to test market waters, gather user feedback, and iterate quickly before full-scale development."
    }
  ];

  return (
    <section id="services" className="py-2 bg-white relative overflow-hidden">
      {/* Layer 1: Most Outer - Boldest Border */}
      <div className="w-[93%] mx-auto relative z-10 border border-slate-300 p-1 rounded-none">
        {/* Layer 2: Middle - Medium Border */}
        <div className="border border-slate-200 p-1 rounded-none">
          {/* Layer 3: Inner - Lightest Border (Content) */}
          <div className="bg-white rounded-none border border-slate-100 py-8 md:py-12 lg:py-16">
            
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="text-left mb-12">
                <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">Our Services</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
                  Our Expertise
                </h2>
                <p className="text-lg text-[#1a1f26] max-w-2xl leading-relaxed font-light">
                  We offer specialized software development and consulting services to help your business scale and succeed in the digital landscape.
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
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      role="tab"
                      aria-selected={activeTab === index}
                      aria-controls={`service-panel-${index}`}
                      id={`service-tab-${index}`}
                      tabIndex={activeTab === index ? 0 : -1}
                      className={cn(
                        "relative flex items-start gap-4 p-5 rounded-none text-left transition-all duration-300 group border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300",
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
                      <div className="flex-shrink-0 mt-0.5">
                        <service.icon
                          size={22}
                          strokeWidth={1.5}
                          className={cn(
                            "transition-colors duration-300",
                            activeTab === index ? "text-[#1a1f26]" : "text-slate-400 group-hover:text-[#1a1f26]"
                          )}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg tracking-tight">{service.title}</span>
                        <span className="text-xs text-slate-500 mt-1 max-w-[38ch]">
                          {service.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="w-full lg:w-2/3">
                  <div
                    className="relative h-full min-h-[550px] rounded-none bg-[#f8fafc] p-8 md:p-14 overflow-hidden border border-slate-100/50"
                    role="tabpanel"
                    id={`service-panel-${activeTab}`}
                    aria-labelledby={`service-tab-${activeTab}`}
                    style={{ borderTopWidth: 4, borderTopColor: accents[activeTab % accents.length] }}
                  >
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div
                          className="w-14 h-14 rounded-none bg-white flex items-center justify-center mb-10 shadow-sm animate-in fade-in zoom-in duration-500 border"
                          style={{ borderColor: accents[activeTab % accents.length] + "33" }}
                        >
                          {(() => {
                            const Icon = services[activeTab].icon;
                            return <Icon size={26} strokeWidth={1.5} className="text-[#1a1f26]" />;
                          })()}
                        </div>
                        
                        <h3 key={activeTab} className="text-3xl md:text-4xl font-serif font-normal text-[#1a1f26] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500 tracking-tight">
                          {services[activeTab].title}
                        </h3>
                        
                        <p key={activeTab + 'desc'} className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100 font-normal">
                          {services[activeTab].detailedDesc}
                        </p>

                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                          Includes
                        </div>
                        <div key={activeTab + 'features'} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                          {services[activeTab].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-600 font-medium bg-white px-5 py-4 rounded-none border border-slate-200/50 backdrop-blur-sm">
                              <Check size={18} strokeWidth={2} className="text-[#1a1f26]" />
                              <span className="tracking-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div key={activeTab + 'cta'} className="animate-in fade-in slide-in-from-bottom-5 duration-500 delay-300">
                        <Link 
                          href="#contact"
                          className={cn(
                            buttonVariants({ size: "lg" }),
                            "h-14 px-8 rounded-none text-base font-bold bg-[#1a1f26] text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                          )}
                        >
                          Consult This Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
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
