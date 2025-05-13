
import React, { useEffect, useRef } from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Array of Indian person profile pictures - using diverse professional photos
  const profileImages = [
    "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman professional
    "https://images.unsplash.com/photo-1559571503-9b6c25c9fa8c?w=100&h=100&fit=crop&crop=faces&q=80", // Indian man with glasses
    "https://images.unsplash.com/photo-1631022955170-c6293cf266bf?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman smiling
    "https://images.unsplash.com/photo-1519419166318-4f5c601b8e6c?w=100&h=100&fit=crop&crop=faces&q=80", // Indian man professional
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman with saree
    "https://images.unsplash.com/photo-1569128782402-d1ec5f20ed09?w=100&h=100&fit=crop&crop=faces&q=80", // Indian man formal
    "https://images.unsplash.com/photo-1615473787525-4227a09f8b7a?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman professional
    "https://images.unsplash.com/photo-1627890331214-c1c7cdd1c66a?w=100&h=100&fit=crop&crop=faces&q=80", // Indian man casual
    "https://images.unsplash.com/photo-1548486840-69f6532a79e7?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman student
    "https://images.unsplash.com/photo-1591189824978-91be2a47302d?w=100&h=100&fit=crop&crop=faces&q=80", // Indian man tech
    "https://images.unsplash.com/photo-1607789382281-1152591ec0da?w=100&h=100&fit=crop&crop=faces&q=80", // Indian woman business
    "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=100&h=100&fit=crop&crop=faces&q=80"  // Indian man professional
  ];
  
  return <section id="community" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 reveal" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">Join the Telugu Community Shaping the Future of AI</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              You don't have to do it alone. Our community supports you across every stage of your career.
              Founders, builders, professionals — all leveling up together.
            </p>
            <a href="https://chat.whatsapp.com/Ed1TnDysXkFG9y4RHJc2e5" target="_blank" rel="noopener noreferrer" className="primary-button inline-flex items-center gap-2">
              <WhatsappIcon className="w-5 h-5" />
              Join the AI Scholar Community
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-4 gap-4">
                {profileImages.map((imageUrl, index) => (
                  <Avatar key={index} className="border-2 border-white" style={{
                    animationDelay: `${0.05 * index}s`
                  }}>
                    <AvatarImage src={imageUrl} alt={`Community member ${index + 1}`} />
                    <AvatarFallback>{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary-accent/20 rounded-xl">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                  </div>
                  <div>
                    <p className="text-primary-DEFAULT font-medium mb-1">Latest Community Discussion</p>
                    <p className="text-gray-600 text-sm">Join the conversation about AI in content creation...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CommunitySection;
