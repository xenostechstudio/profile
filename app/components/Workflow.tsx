"use client";

import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Workflow = memo(function Workflow() {
  const workflowSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start with a comprehensive consultation to understand your business needs, goals, and challenges."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "We create a detailed roadmap and technical architecture tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Design", 
      description: "We design user-centric interfaces and create prototypes to validate concepts before development."
    },
    {
      step: "04",
      title: "Development",
      description: "Our expert developers build your solution using best practices and rigorous testing protocols."
    },
    {
      step: "05",
      title: "Deployment",
      description: "We handle the complete deployment process and ensure a smooth launch of your application."
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing support and maintenance to keep your application running optimally and up-to-date."
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-white relative overflow-hidden">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-left mb-12">
          <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">How We Work</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
            Our Process
          </h2>
          <p className="text-lg text-[#1a1f26] max-w-2xl leading-relaxed font-light">
            A streamlined approach to delivering exceptional solutions.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
          {workflowSteps.map((step, index) => (
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
