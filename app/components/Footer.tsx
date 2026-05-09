"use client";

import { memo } from "react";
import Link from "next/link";
import { LogoIcon, LogoText } from "./LogoV2";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Instagram, 
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-900 pt-24 pb-12 relative overflow-hidden">
      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#1a1f26] tracking-tight mb-4">
              Ready to transform your digital presence?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
              Let's collaborate to build something extraordinary tailored to your business needs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link 
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#1a1f26] text-white hover:bg-slate-800 font-bold rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
              )}
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <Separator className="bg-slate-200 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <LogoIcon size={42} rounded={true} />
              <LogoText 
                width={160} 
                height={42}
                primaryColor="#1a1f26"
                secondaryColor="#1a1f26"
              />
            </Link>
            
            <p className="text-lg text-slate-600 max-w-sm leading-relaxed font-normal">
              We craft high-performance software solutions that drive business growth. 
              From custom development to digital transformation, we are your technical partner.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="font-serif font-normal text-lg mb-4 text-[#1a1f26]">Services</h4>
              <ul className="space-y-2">
                {[
                  "Custom Development",
                  "Business Automation",
                  "Cloud Infrastructure",
                  "Digital Consulting",
                  "UI/UX Design",
                  "Mobile Applications"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-500 hover:text-[#1a1f26] transition-colors duration-200 block py-0.5 font-light text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif font-normal text-lg mb-4 text-[#1a1f26]">Company</h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Our Process",
                  "Portfolio",
                  "Careers",
                  "Blog",
                  "Contact"
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-500 hover:text-[#1a1f26] transition-colors duration-200 block py-0.5 font-light text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-normal text-lg mb-4 text-[#1a1f26]">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-500 font-light text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                  <a href="mailto:hello@xenostech.com" className="hover:text-[#1a1f26] transition-colors">
                    hello@xenostech.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-500 font-light text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                  <span>
                    Jakarta, Indonesia
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-500 font-light text-sm">
                  <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                  <a href="tel:+6281234567890" className="hover:text-[#1a1f26] transition-colors">
                    +62 812 3456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-200 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-light relative">
          <div className="font-normal" suppressHydrationWarning>
            © {currentYear} Xenostech Studio. All rights reserved.
          </div>

          {/* Social Icons - Centered Absolute */}
          <div className="flex items-center justify-center gap-4 md:absolute md:left-1/2 md:-translate-x-1/2">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1a1f26] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 font-normal">
             Made With <span className="text-red-500">♥</span> Rifqi Muhammad Aziz
             <span className="mx-2 text-slate-300">•</span>
             <a href="https://github.com/rifqimuhammadaziz" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1f26] transition-colors">
               GitHub
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
