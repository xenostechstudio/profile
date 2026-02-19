"use client";

import { memo } from 'react';

const Contact = memo(function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      value: "hello@xenostechstudio.com",
      action: "mailto:hello@xenostechstudio.com",
      label: "Send Email"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+62 812 3456 7890",
      action: "https://wa.me/6281234567890",
      label: "Chat Now"
    },
    {
      icon: "📅",
      title: "Consultation",
      value: "Book a 30-min call",
      action: "#",
      label: "Schedule"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-left mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-normal">
            Ready to start your project? We're here to help you build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group bg-[#f4f7f6] p-10 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300 flex flex-col items-start justify-between min-h-[240px]"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300 mb-8">
                {method.icon}
              </div>
              
              <div className="w-full">
                <h3 className="text-2xl font-serif font-normal text-[#1a1f26] mb-2">{method.title}</h3>
                <p className="text-slate-500 font-medium mb-8">{method.value}</p>
                
                <a 
                  href={method.action}
                  className="inline-flex items-center text-[#1a1f26] font-bold uppercase tracking-widest text-xs group-hover:gap-2 transition-all duration-300 border-b border-[#1a1f26] pb-1"
                >
                  {method.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-3 h-3"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h4 className="text-lg font-serif text-[#1a1f26] mb-2">Office Location</h4>
            <p className="text-slate-500">Jakarta, Indonesia (GMT+7)</p>
          </div>
          <div className="flex gap-4">
            {["LinkedIn", "Instagram", "GitHub", "Dribbble"].map((social) => (
              <a key={social} href="#" className="text-slate-400 hover:text-[#1a1f26] transition-colors font-medium text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
