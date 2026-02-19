"use client";

import { memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Product {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  status: string;
  color: string;
  longDescription?: string;
  techStack?: string[];
  screenshots?: string[];
  benefits?: string[];
  pricing?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  animationOrigin?: { x: number; y: number; width: number; height: number } | null;
}

const ProductModal = memo(function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  const detailedInfo = {
    sibi: {
      longDescription: "SIBI (Sistem Isyarat Bahasa Indonesia) is a revolutionary platform bridging the communication gap between the hearing and the Deaf community. By leveraging advanced AI and computer vision, it translates sign language gestures into text/speech and vice versa in real-time, making communication accessible to everyone.",
      techStack: ["Python", "TensorFlow", "React Native", "FastAPI", "OpenCV", "WebSocket"],
      benefits: [
        "Real-time two-way translation",
        "Interactive learning gamification",
        "95% gesture recognition accuracy",
        "Offline mode support",
        "Community-driven dictionary",
        "Cross-platform availability"
      ],
      pricing: "Free for individual use"
    },
    genggong: {
      longDescription: "The Genggong Smart Campus ecosystem is a comprehensive digital transformation initiative for Pesantren Zainul Hasan Genggong. It integrates academic, administrative, and financial systems into a unified platform, fostering a modern educational environment while preserving traditional values.",
      techStack: ["Next.js", "Laravel", "MySQL", "Flutter", "Redis", "AWS"],
      benefits: [
        "Automated attendance tracking",
        "Cashless campus environment",
        "Digital academic records",
        "Parent monitoring app",
        "Library digitization",
        "Efficient administrative workflows"
      ],
      pricing: "Custom Enterprise Solution"
    },
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#2c3642] border-none text-white rounded-2xl">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <ScrollArea className="max-h-[90vh]">
          {/* Hero Section */}
          <div 
            className="relative p-8 text-white"
            style={{ 
              background: `linear-gradient(135deg, ${product.color}ee, ${product.color}cc)`,
            }}
          >
            <div className="mb-6">
              <h2 className="text-4xl font-bold mb-2 text-white">{product.name}</h2>
              <DialogDescription className="text-xl opacity-90 text-white/90">{product.title}</DialogDescription>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-none px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </Badge>
                <Badge className="bg-emerald-500/80 hover:bg-emerald-500/90 text-white border-none px-3 py-1 rounded-full text-sm font-semibold">
                  {product.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">About {product.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {product.description}
              </p>
              {details.longDescription && (
                <p className="text-gray-300 leading-relaxed">
                  {details.longDescription}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: product.color }}
                      ></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {details.benefits && (
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Business Benefits</h4>
                  <div className="space-y-3">
                    {details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technology Stack */}
            {details.techStack && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {details.techStack.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 bg-[#333f4d] text-gray-300 border-none text-sm rounded-full font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing & CTA */}
            <div className="mt-8 p-6 bg-[#333f4d] rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h4>
                  {details.pricing && (
                    <p className="text-2xl font-bold mb-1" style={{ color: product.color }}>
                      {details.pricing}
                    </p>
                  )}
                  <p className="text-sm text-gray-300">30-day free trial • No setup fees</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="px-6 py-6 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 border-none"
                    style={{ backgroundColor: product.color }}
                  >
                    Schedule Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="px-6 py-6 rounded-xl font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-transparent"
                    style={{ 
                      borderColor: product.color, 
                      color: product.color,
                    }}
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
});

export default ProductModal;
