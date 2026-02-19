"use client";

import { memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = memo(function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`max-w-4xl p-0 overflow-hidden bg-[#2c3642] border-none text-white rounded-2xl ${className}`}>
        <DialogTitle className="sr-only">Modal Content</DialogTitle>
        {/* Close Button is built-in to DialogContent, but we can customize if needed */}
        {/* However, the original had a custom styled close button, so we'll add it if we want to match exactly */}
        
        <ScrollArea className="max-h-[90vh]">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
});

export default Modal;
