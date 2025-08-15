"use client";

import { memo, useEffect } from "react";

interface AnimationOrigin {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  animationOrigin?: AnimationOrigin;
}

const Modal = memo(function Modal({ isOpen, onClose, children, className = "", animationOrigin }: ModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out animate-in fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden ${className}`}
        style={{
          animation: animationOrigin 
            ? `zoomInFromOrigin 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
            : 'zoomInDefault 0.3s ease-out forwards',
          transformOrigin: animationOrigin 
            ? `${animationOrigin.x}px ${animationOrigin.y}px`
            : 'center center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200 group"
        >
          <svg 
            className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {children}
        </div>
      </div>
    </div>
  );
});

export default Modal;
