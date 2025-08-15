"use client";

import { memo } from "react";

const Services = memo(function Services() {
  const services = [
    {
      icon: "💻",
      title: "Custom Application Development",
      description: "Build tailored software solutions that perfectly match your business processes and requirements.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    {
      icon: "🔧",
      title: "Business Process Automation",
      description: "Streamline your operations with intelligent automation solutions that save time and reduce costs.",
      features: ["Workflow Automation", "Data Integration", "Process Optimization", "System Integration"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & Infrastructure",
      description: "Modern, scalable cloud architectures that grow with your business needs.",
      features: ["Cloud Migration", "DevOps Setup", "Infrastructure Design", "Performance Optimization"]
    },
    {
      icon: "📊",
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business and leverage technology effectively.",
      features: ["Technology Strategy", "Digital Roadmaps", "System Architecture", "Best Practices"]
    },
    {
      icon: "🛡️",
      title: "Software Maintenance & Support",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      features: ["Bug Fixes", "Performance Tuning", "Security Updates", "Feature Enhancements"]
    },
    {
      icon: "🎯",
      title: "MVP & Prototype Development",
      description: "Rapid development of minimum viable products to validate your ideas quickly.",
      features: ["Proof of Concept", "Market Validation", "Rapid Prototyping", "Iterative Development"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-[#13bfb5]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive software development and consulting services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="w-2 h-2 bg-[#13bfb5] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business ideas into powerful digital solutions.
            </p>
            <button className="px-8 py-3 bg-white text-[#13bfb5] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
