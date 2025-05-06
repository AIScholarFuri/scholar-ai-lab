import React from 'react';
const HeroSection: React.FC = () => {
  return <section className="min-h-screen relative flex items-center pt-16" id="hero">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        {/* Placeholder for hero background image */}
        <div className="absolute inset-0 bg-[url('https://https://unsplash.com/photos/a-white-mannequin-wearing-a-white-mask-db2y7AD7s7M')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-float">
            <span className="inline-block py-2 px-4 rounded-full bg-primary-accent/20 text-primary-DEFAULT mb-6 font-medium">
              Future-Ready Skills
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-DEFAULT leading-tight mb-6 animate-fade-in">
            Don't Get Left Behind.<br />Level Up with AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Whether you're a founder, student or creator — AI School makes it easy to stay ahead.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <a href="#contact" className="primary-button">
              Chat with Us
            </a>
            <a href="#community" className="secondary-button">
              Join Free Community
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-pulse-soft">
        <a href="#about" className="text-primary-DEFAULT p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>;
};
export default HeroSection;