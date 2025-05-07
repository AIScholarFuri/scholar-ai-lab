import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { WhatsappIcon } from './icons/WhatsappIcon';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#" className="flex items-center">
          <img alt="AI Scholar Logo" src="/lovable-uploads/c08e1f71-c2f4-49da-a28c-3127f8200af4.png" className="h-10 mr-2 object-cover" />
          
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
          <a href="#tools" className="text-primary hover:text-accent transition-colors">AI Tools</a>
          <a href="#community" className="text-primary hover:text-accent transition-colors">Community</a>
          <a href="#blog" className="text-primary hover:text-accent transition-colors">Blog</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://wa.me/919154442611" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
            <WhatsappIcon className="w-5 h-5" />
            Chat with Us
          </a>
          
          <a href="https://chat.whatsapp.com/Ed1TnDysXkFG9y4RHJc2e5" target="_blank" rel="noopener noreferrer" className="primary-button flex items-center gap-2">
            <WhatsappIcon className="w-5 h-5" />
            Join Free Community
          </a>
        </div>
        
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <span className="text-2xl">×</span> : <span className="text-xl">☰</span>}
        </button>
      </div>
      
      {isMobileMenuOpen && <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-primary py-2 border-b border-gray-100">About</a>
            <a href="#tools" className="text-primary py-2 border-b border-gray-100">AI Tools</a>
            <a href="#community" className="text-primary py-2 border-b border-gray-100">Community</a>
            <a href="#blog" className="text-primary py-2 border-b border-gray-100">Blog</a>
            
            <a href="https://wa.me/919154442611" target="_blank" rel="noopener noreferrer" className="text-primary py-2 border-b border-gray-100 flex items-center gap-2">
              <WhatsappIcon className="w-5 h-5" />
              Chat with Us
            </a>
            
            <a href="https://chat.whatsapp.com/Ed1TnDysXkFG9y4RHJc2e5" target="_blank" rel="noopener noreferrer" className="primary-button text-center mt-4 flex items-center justify-center gap-2">
              <WhatsappIcon className="w-5 h-5" />
              Join Free Community
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;