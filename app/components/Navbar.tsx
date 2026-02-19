"use client";

import { useState, useEffect } from "react";
import { LogoIcon, LogoText } from "./LogoV2";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { SearchCommand } from "./SearchCommand";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial delay before showing the navbar
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const content = {
    en: {
      services: "Services",
      products: "Products",
      process: "Process",
      skills: "Skills",
      marketplace: "Marketplace",
      contact: "Contact",
      search: "Search...",
      contactUs: "Contact Us",
      languageLabel: "Language",
      serviceItems: [
        { title: "Custom Development", href: "#services", description: "Tailored software solutions for your business." },
        { title: "Business Automation", href: "#services", description: "Streamline your workflows with AI and automation." },
        { title: "Cloud Solutions", href: "#services", description: "Scalable and secure cloud infrastructure." },
        { title: "Digital Consulting", href: "#services", description: "Expert advice on your digital transformation." },
      ],
      productItems: [
        { title: "eClinic", href: "#portfolio", description: "Healthcare management platform." },
        { title: "eSyncore", href: "#portfolio", description: "Enterprise ERP solution." },
      ]
    },
    id: {
      services: "Layanan",
      products: "Produk",
      process: "Proses",
      skills: "Keahlian",
      marketplace: "Pasar",
      contact: "Kontak",
      search: "Cari...",
      contactUs: "Hubungi Kami",
      languageLabel: "Bahasa",
      serviceItems: [
        { title: "Pengembangan Kustom", href: "#services", description: "Solusi perangkat lunak yang disesuaikan untuk bisnis Anda." },
        { title: "Otomasi Bisnis", href: "#services", description: "Rampingkan alur kerja Anda dengan AI dan otomasi." },
        { title: "Solusi Cloud", href: "#services", description: "Infrastruktur cloud yang skalabel dan aman." },
        { title: "Konsultasi Digital", href: "#services", description: "Saran ahli tentang transformasi digital Anda." },
      ],
      productItems: [
        { title: "eClinic", href: "#portfolio", description: "Platform manajemen kesehatan." },
        { title: "eSyncore", href: "#portfolio", description: "Solusi ERP perusahaan." },
      ]
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = content[language];
  const services = t.serviceItems;
  const products = t.productItems;

  return (
    <nav 
      suppressHydrationWarning
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-[1440px] transition-all duration-1000 cubic-bezier(0.32, 0.72, 0, 1)",
        isLoaded ? "top-4 opacity-100" : "-top-20 opacity-0"
      )}
    >
      <div className="flex items-center justify-between p-0.5 bg-[#1a1f26] border border-white/10 rounded-full shadow-2xl backdrop-blur-md">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 pl-1.5 pr-4 py-1.5 transition-opacity hover:opacity-80">
            <LogoIcon size={32} rounded={true} />
            <div className="block overflow-hidden whitespace-nowrap w-[140px]">
              <LogoText 
                width={140} 
                height={32} 
                primaryColor="#ffffff" 
                secondaryColor="#ffffff" 
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/80 hover:bg-white/10 hover:text-white h-7 px-3 text-xs font-medium focus:bg-white/10 focus:text-white transition-all duration-300">
                    {t.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/50">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Portfolio Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white/80 hover:bg-white/10 hover:text-white h-7 px-3 text-xs font-medium focus:bg-white/10 focus:text-white transition-all duration-300">
                    {t.products}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
                            >
                              <div className="text-sm font-medium leading-none text-white">{product.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-white/50">
                                {product.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#workflow" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/80 hover:bg-white/10 hover:text-white h-7 px-3 text-xs font-medium focus:bg-white/10 focus:text-white transition-all duration-300")}>
                      {t.process}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#about" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/80 hover:bg-white/10 hover:text-white h-7 px-3 text-xs font-medium focus:bg-white/10 focus:text-white transition-all duration-300")}>
                      {t.skills}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/80 hover:bg-white/10 hover:text-white h-7 px-3 text-xs font-medium focus:bg-white/10 focus:text-white transition-all duration-300")}>
                      {t.marketplace}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Side: Search & Actions */}
        <div className="flex items-center gap-2 pr-1.5">
          {/* Language Switcher (Desktop) */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden sm:flex items-center gap-1.5 text-white/80 hover:bg-white/10 hover:text-white h-8 px-3 text-xs font-medium rounded-full mr-1"
          >
            <span className="text-base">{language === 'en' ? '🇺🇸' : '🇮🇩'}</span>
            <span>{language === 'en' ? 'EN' : 'ID'}</span>
          </Button>

          {/* Search Bar */}
          <div 
            className="hidden md:flex items-center relative group cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="absolute left-3 w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
            <Input 
              placeholder={t.search} 
              className="w-48 lg:w-64 h-8 pl-9 pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-full focus-visible:ring-1 focus-visible:ring-white/20 transition-all text-xs pointer-events-none"
              readOnly
              suppressHydrationWarning
            />
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 px-1.5 py-0.5 rounded-xl border border-white/10 bg-white/5 text-[10px] font-medium text-white/50 pointer-events-none select-none font-mono opacity-100">
              <span className="text-xs">⌘</span>
              <span>K</span>
            </div>
          </div>

          <Link 
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "hidden sm:flex items-center gap-2 bg-white text-[#1a1f26] hover:bg-white/90 rounded-full h-7 px-4 text-xs font-bold transition-all duration-300 hover:scale-105"
            )}
          >
            {t.contact}
            <ArrowRight className="w-3 h-3" />
          </Link>

          {/* Mobile Search Trigger */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white/80 hover:bg-white/10 hover:text-white h-10 w-10 relative z-50"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white/80 hover:bg-white/10 hover:text-white h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1a1f26] border-white/10 p-6 text-white">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                <div className="flex flex-col gap-4 mt-8" suppressHydrationWarning>
                  <Link href="#services" className="text-lg font-medium hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>{t.services}</Link>
                  <Link href="#portfolio" className="text-lg font-medium hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>{t.products}</Link>
                  <Link href="#workflow" className="text-lg font-medium hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>{t.process}</Link>
                  <Link href="#about" className="text-lg font-medium hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>{t.skills}</Link>
                  <Link href="#contact" className="text-lg font-medium hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</Link>
                  
                  <div className="flex items-center justify-between py-4 border-t border-white/10 mt-2">
                    <span className="text-white/60">{t.languageLabel}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className="text-white hover:bg-white/10 h-8 px-3 text-xs font-medium rounded-full bg-white/5 border border-white/10"
                    >
                        <span className="text-lg mr-2">{language === 'en' ? '🇺🇸' : '🇮🇩'}</span>
                        {language === 'en' ? 'English' : 'Indonesia'}
                    </Button>
                  </div>

                  <hr className="border-white/10 my-2" />
                  <Link 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full bg-white text-[#1a1f26] hover:bg-white/90 rounded-full font-bold"
                    )}
                  >
                    {t.contactUs}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
};

export default Navbar;
