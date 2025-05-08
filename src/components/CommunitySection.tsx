import React, { useEffect, useRef } from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
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
                {Array.from({
                length: 12
              }).map((_, index) => <div key={index} className="aspect-square rounded-full overflow-hidden border-2 border-white" style={{
                animationDelay: `${0.05 * index}s`,
                backgroundImage: `url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop&crop=faces&q=80)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>)}
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