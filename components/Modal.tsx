import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b-4 border-black p-4 bg-black text-white">
          <h2 className="text-2xl font-pixel uppercase tracking-widest line-clamp-1">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-white"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;