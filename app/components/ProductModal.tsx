"use client";

import { memo } from "react";
import Modal from "./Modal";

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
  longDescription?: string;
  techStack?: string[];
  screenshots?: string[];
  benefits?: string[];
  pricing?: string;
}

interface AnimationOrigin {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  animationOrigin?: AnimationOrigin | null;
}

const ProductModal = memo(function ProductModal({ product, isOpen, onClose, animationOrigin }: ProductModalProps) {
  if (!product) return null;

  const detailedInfo = {
    eclinic: {
      longDescription: "eClinic is a comprehensive healthcare management platform designed to streamline medical practice operations. Built with modern web technologies, it provides healthcare professionals with intuitive tools to manage patient care efficiently while maintaining compliance with healthcare regulations.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Node.js"],
      benefits: [
        "Reduce administrative workload by 60%",
        "Improve patient satisfaction scores",
        "Ensure HIPAA compliance",
        "Streamline billing processes",
        "Real-time reporting and analytics",
        "Mobile-responsive design"
      ],
      pricing: "Starting from $299/month"
    },
    esyncore: {
      longDescription: "eSyncore is an enterprise-grade ERP solution that unifies all business processes into a single, powerful platform. Designed for growing businesses, it scales with your operations while providing deep insights through advanced analytics and reporting capabilities.",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redis", "Docker"],
      benefits: [
        "Increase operational efficiency by 45%",
        "Real-time business intelligence",
        "Automated workflow management",
        "Multi-location support",
        "Advanced reporting dashboard",
        "API-first architecture"
      ],
      pricing: "Starting from $499/month"
    }
  };

  const details = detailedInfo[product.id as keyof typeof detailedInfo] || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} animationOrigin={animationOrigin || undefined}>
      <div className="p-0">
        {/* Hero Section */}
        <div 
          className="relative p-8 text-white"
          style={{ 
            background: `linear-gradient(135deg, ${product.color}ee, ${product.color}cc)`,
          }}
        >
          <div className="flex items-center gap-6 mb-6">
            <div 
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              {product.icon}
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
              <p className="text-xl opacity-90">{product.title}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="bg-green-500/80 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About {product.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              {product.description}
            </p>
            {details.longDescription && (
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {details.longDescription}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Features */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            {details.benefits && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Benefits</h4>
                <div className="space-y-3">
                  {details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technology Stack */}
          {details.techStack && (
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {details.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing & CTA */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ready to Get Started?</h4>
                {details.pricing && (
                  <p className="text-2xl font-bold mb-1" style={{ color: product.color }}>
                    {details.pricing}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300">30-day free trial • No setup fees</p>
              </div>
              <div className="flex gap-3">
                <button 
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: product.color }}
                >
                  Schedule Demo
                </button>
                <button 
                  className="px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ 
                    borderColor: product.color, 
                    color: product.color,
                    backgroundColor: 'transparent'
                  }}
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default ProductModal;
