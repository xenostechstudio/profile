"use client";

import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products, type Product } from "@/lib/products";
import ProductModal from "./ProductModal";
import { useLanguage } from "@/app/providers/language";
import { translations } from "@/lib/translations";

const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [trackState, setTrackState] = useState({ width: 100, left: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 150);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const calc = () => {
      if (el.scrollWidth <= el.clientWidth) {
        setTrackState({ width: 100, left: 0 });
        return;
      }
      const widthPct = (el.clientWidth / el.scrollWidth) * 100;
      const leftPct = (el.scrollLeft / el.scrollWidth) * 100;
      setTrackState({ width: widthPct, left: leftPct });
    };

    calc();
    el.addEventListener("scroll", calc, { passive: true });

    const resizeObs = new ResizeObserver(calc);
    resizeObs.observe(el);

    return () => {
      el.removeEventListener("scroll", calc);
      resizeObs.disconnect();
    };
  }, []);

  const handleProductClick = (product: Product, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setAnimationOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    });
    setTimeout(() => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-48 pb-32">
      {isVisible && (
        <div
          className="fixed top-[68px] left-1/2 z-40 w-[98%] max-w-[1440px] flex justify-center pointer-events-none transition-all duration-300 ease-out"
          style={{
            opacity: scrollOpacity,
            transform: `translate(-50%, ${(1 - scrollOpacity) * -10}px) scale(${0.98 + (scrollOpacity * 0.02)})`,
          }}
          suppressHydrationWarning
        >
          <div className="w-full bg-white/10 backdrop-blur-md border border-slate-200/20 py-2.5 rounded-full shadow-sm flex items-center justify-center gap-6 px-6 text-slate-600 text-xs md:text-sm font-medium tracking-wide" suppressHydrationWarning>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-[#1a1f26]">{t.statusOnline}</span>
            </div>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">{t.tagCustomDev}</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">{t.tagCloudInfra}</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-[#1a1f26]">{t.tagUIUX}</span>
            <span className="text-slate-300 hidden md:inline">•</span>
            <span className="hidden md:inline text-emerald-600">{t.tagSupport}</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
      </div>

      <div className="w-[98%] max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <div className={cn(
          "mb-12 transition-all duration-1000 ease-out flex flex-col items-center",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex items-center gap-4 mb-6 opacity-80">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#1a1f26]/50"></span>
            <span className="text-sm md:text-sm text-[#1a1f26] max-w-2xl leading-relaxed font-normal">
              {t.eyebrow}
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#1a1f26]/50"></span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-[#1a1f26] leading-[1.05] tracking-tight max-w-5xl">
            {t.headlineLine1} <br />
            {t.headlineLine2}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.headlineHighlight}</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 md:bottom-2 h-2 md:h-3 bg-[#13bfb5]/30"
              />
            </span>
          </h1>
        </div>

        <div className={cn(
          "flex flex-col sm:flex-row gap-4 mb-8 justify-center transition-all duration-1000 ease-out delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Link
            href="#work"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 px-8 rounded-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-[#1a1f26] text-white hover:bg-slate-800"
            )}
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="#about"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 px-8 rounded-full text-base font-bold bg-white border-slate-300 text-[#1a1f26] hover:bg-slate-50 hover:border-[#1a1f26] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            )}
          >
            {t.ctaSecondary}
          </Link>
        </div>

        <div
          id="work"
          className={cn(
            "mt-20 lg:mt-24 text-left scroll-mt-32 transition-all duration-1000 ease-out delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-end mb-6 px-1">
            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-[#1a1f26]/30" aria-hidden />
              <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em]">
                {t.selectedWork}
              </span>
            </div>
          </div>

          <div className="-mx-6 lg:-mx-12">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 px-6 lg:px-12"
            >
              {products.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  onClick={(e) => handleProductClick(product, e)}
                  className="snap-start shrink-0 w-[280px] md:w-[320px] group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1f26] focus-visible:ring-offset-2"
                >
                  <div
                    className="bg-white border border-slate-200 group-hover:border-slate-300 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full p-6 flex flex-col gap-5"
                    style={{ borderTopWidth: 4, borderTopColor: product.color }}
                  >
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {product.category}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl text-[#1a1f26] mb-1 tracking-tight group-hover:text-black transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider line-clamp-1">
                        {product.title}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mt-auto">
                      {product.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div
              className="relative w-48 md:w-64 h-1 bg-slate-200 rounded-full overflow-hidden"
              role="presentation"
              aria-hidden
            >
              <div
                className="absolute top-0 h-full bg-[#1a1f26] rounded-full"
                style={{
                  width: `${trackState.width}%`,
                  left: `${trackState.left}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        animationOrigin={animationOrigin}
      />
    </section>
  );
});

export default Hero;
