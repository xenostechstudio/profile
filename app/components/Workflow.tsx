"use client";

import { memo } from "react";

const Workflow = memo(function Workflow() {
  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive consultation to understand your business needs, goals, and challenges.",
      features: ["Free initial consultation", "Requirements analysis", "Technology assessment", "Project scoping"],
      icon: "🔍",
      color: "from-[#13bfb5] to-[#0ea5a5]"
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "We create a detailed roadmap and technical architecture tailored to your specific requirements.",
      features: ["Technical architecture", "Project timeline", "Resource allocation", "Risk assessment"],
      icon: "📋",
      color: "from-[#60a5fa] to-[#4f94f5]"
    },
    {
      step: "03",
      title: "Design & Prototyping", 
      description: "We design user-centric interfaces and create prototypes to validate concepts before development.",
      features: ["UI/UX design", "Interactive prototypes", "User testing", "Design iterations"],
      icon: "🎨",
      color: "from-[#13bfb5] to-[#60a5fa]"
    },
    {
      step: "04",
      title: "Development & Testing",
      description: "Our expert developers build your solution using best practices and rigorous testing protocols.",
      features: ["Agile development", "Code reviews", "Quality assurance", "Performance testing"],
      icon: "⚡",
      color: "from-[#60a5fa] to-[#13bfb5]"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and ensure a smooth launch of your application.",
      features: ["Cloud deployment", "Environment setup", "Go-live support", "Launch monitoring"],
      icon: "🚀",
      color: "from-[#13bfb5] to-[#0ea5a5]"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your application running optimally and up-to-date.",
      features: ["24/7 monitoring", "Regular updates", "Bug fixes", "Feature enhancements"],
      icon: "🛡️",
      color: "from-[#60a5fa] to-[#4f94f5]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-[#13bfb5]">Workflow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From initial consultation to production deployment, we guide you through every step of your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Step Number */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {step.step}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 mt-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-2 h-2 bg-[#13bfb5] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Progress Line for non-last items */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden xl:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a customized workflow that fits your specific needs and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-white text-[#13bfb5] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#13bfb5] transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Workflow;
