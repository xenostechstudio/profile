"use client";

import { memo, useState } from "react";
import ProductModal from "./ProductModal";

interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  status: string;
  color: string;
  icon: string;
}

const Portfolio = memo(function Portfolio() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedProduct, setClickedProduct] = useState<string | null>(null);
  const [animationOrigin, setAnimationOrigin] = useState<{x: number, y: number, width: number, height: number} | null>(null);

  const handleProductClick = (product: Product, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };
    
    setClickedProduct(product.id);
    setAnimationOrigin(origin);
    
    // Add slight delay for click animation feedback
    setTimeout(() => {
      setSelectedProduct(product);
      setIsModalOpen(true);
      setClickedProduct(null);
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products: Product[] = [
    {
      id: "eclinic",
      name: "eClinic",
      title: "Clinic Information System",
      description: "Complete healthcare management solution designed for modern medical practices. Streamline patient care, appointments, and clinic operations with our comprehensive CIS platform.",
      features: [
        "Patient Management & Records",
        "Appointment Scheduling",
        "Medical History Tracking",
        "Prescription Management",
        "Billing & Insurance",
        "Analytics & Reporting"
      ],
      category: "Healthcare",
      status: "Production Ready",
      color: "#13bfb5",
      icon: "🏥"
    },
    {
      id: "esyncore",
      name: "eSyncore",
      title: "Enterprise Resource Planning",
      description: "Powerful ERP solution that integrates all business processes into one unified system. Optimize operations, improve efficiency, and drive growth with intelligent automation.",
      features: [
        "Financial Management",
        "Inventory Control",
        "Human Resources",
        "Supply Chain Management",
        "Project Management",
        "Business Intelligence"
      ],
      category: "Business",
      status: "Production Ready",
      color: "#60a5fa",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#13bfb5]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#13bfb5] font-semibold text-sm">💼 PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready-to-Use 
            <span className="block bg-gradient-to-r from-[#13bfb5] to-[#60a5fa] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proven enterprise-grade applications already serving businesses worldwide. 
            Start using these powerful tools today.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-opacity-50 cursor-pointer ${
                clickedProduct === product.id ? 'scale-95 shadow-xl' : 
                activeProduct === product.id ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              }`}
              style={{
                borderColor: activeProduct === product.id || clickedProduct === product.id ? product.color : 'transparent'
              }}
              onClick={(e) => handleProductClick(product, e)}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              {/* Product Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{ backgroundColor: `${product.color}20`, color: product.color }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {product.title}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.status}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: product.color }}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button 
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: product.color }}
                  onClick={(e) => handleProductClick(product, e)}
                >
                  View Details
                </button>
                <button 
                  className="flex-1 py-3 px-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ 
                    borderColor: product.color, 
                    color: product.color,
                    backgroundColor: 'transparent'
                  }}
                  onClick={(e) => handleProductClick(product, e)}
                >
                  Learn More
                </button>
              </div>

              {/* Hover Effect Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10"
                style={{ backgroundColor: product.color }}
              ></div>
            </div>
          ))}
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
