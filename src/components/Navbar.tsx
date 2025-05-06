import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
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
          <span className="text-primary text-xl font-poppins font-bold">AI Scholar</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
          <a href="#courses" className="text-primary hover:text-accent transition-colors">Courses</a>
          <a href="#tools" className="text-primary hover:text-accent transition-colors">AI Tools</a>
          <a href="#community" className="text-primary hover:text-accent transition-colors">Community</a>
          <a href="#blog" className="text-primary hover:text-accent transition-colors">Blog</a>
        </div>
        
        <div className="hidden md:flex">
          <a href="#contact" className="primary-button">Join Free Community</a>
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
            
            <a href="#contact" className="primary-button text-center mt-4">Join Free Community</a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;