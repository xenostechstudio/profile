"use client";

import { memo, useState } from "react";
import ProductModal from "./ProductModal";
import { products, type Product } from "@/lib/products";

const Portfolio = memo(function Portfolio() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState<{x: number, y: number, width: number, height: number} | null>(null);

  const handleProductClick = (product: Product, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };
    
    setAnimationOrigin(origin);
    
    // Add slight delay for click animation feedback
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
    <section id="portfolio" className="py-2 bg-white relative overflow-hidden">
      {/* Layer 1: Most Outer - Boldest Border */}
      <div className="w-[93%] mx-auto relative z-10 border border-slate-300 p-1 rounded-none">
        {/* Layer 2: Middle - Medium Border */}
        <div className="border border-slate-200 p-1 rounded-none">
          {/* Layer 3: Inner - Lightest Border (Content) */}
          <div className="bg-white rounded-none border border-slate-100 py-8 md:py-12 lg:py-16">
            
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
              {/* Section Header */}
              <div className="text-left mb-12">
                <span className="text-xs font-bold text-[#1a1f26] uppercase tracking-[0.3em] mb-4 block">Our Work</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1f26] mb-4 tracking-tight leading-[0.9]">
                  Selected Work
                </h2>
                <p className="text-lg text-[#1a1f26] max-w-2xl leading-relaxed font-light">
                  Showcasing our impact through innovative digital solutions and transformative projects.
                </p>
              </div>

              {/* Product List Layout */}
              <div className="flex flex-col gap-8">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="group relative bg-white border border-slate-200 p-8 md:p-12 hover:border-slate-300 transition-all duration-300 flex flex-col lg:flex-row gap-8 lg:gap-20 cursor-pointer hover:shadow-lg hover:-translate-y-1 items-center"
                    onClick={(e) => handleProductClick(product, e)}
                    style={{
                      borderLeft: `4px solid ${product.color}`
                    }}
                  >
                    {/* Left Side: Content */}
                    <div className="flex-1 flex flex-col justify-center w-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-sm">{product.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${product.status === 'In Development' ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${product.status === 'In Development' ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{product.status}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-3xl md:text-5xl font-serif font-medium text-[#1a1f26] tracking-tight mb-3 group-hover:text-black transition-colors">{product.name}</h3>
                        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{product.title}</p>
                      </div>
                      
                      <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-normal line-clamp-3 group-hover:text-slate-700 transition-colors max-w-xl">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="text-xs px-3 py-1.5 bg-slate-50 text-slate-600 border border-slate-100 font-medium tracking-wide rounded-sm group-hover:bg-slate-100 transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Thumbnail Placeholder */}
                    <div className="w-full lg:w-[45%] aspect-video bg-slate-100 rounded-sm border border-slate-200 overflow-hidden relative group-hover:border-slate-300 transition-colors shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-200/50 mx-auto mb-4 flex items-center justify-center">
                              <span className="text-2xl opacity-50">🖼️</span>
                            </div>
                            <span className="text-sm font-medium uppercase tracking-widest">Project Preview</span>
                          </div>
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        animationOrigin={animationOrigin}
      />
    </section>
  );
});

export default Portfolio;
