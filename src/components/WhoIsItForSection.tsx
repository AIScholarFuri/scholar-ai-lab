
import React, { useEffect, useRef } from 'react';

const WhoIsItForSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="who-is-it-for" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 reveal" ref={sectionRef}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">AI School is for Dreamers, Doers, and Innovators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you build, create, teach, or lead — we're here to get you fluent in AI, fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Founders',
              icon: 'user',
              description: 'Harness AI to scale operations and innovate faster'
            },
            {
              title: 'Students',
              icon: 'graduation-cap',
              description: 'Learn skills that make you stand out in tomorrow\'s job market'
            },
            {
              title: 'Creators',
              icon: 'images',
              description: 'Amplify your creativity and production capabilities'
            },
            {
              title: 'Professionals',
              icon: 'briefcase',
              description: 'Stay relevant and embrace the future of your industry'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-primary-accent/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <div className="text-primary-DEFAULT">
                  {item.icon === 'user' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  )}
                  {item.icon === 'graduation-cap' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  )}
                  {item.icon === 'images' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                  )}
                  {item.icon === 'briefcase' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-DEFAULT">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
