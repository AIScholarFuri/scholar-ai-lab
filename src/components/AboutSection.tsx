
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 reveal" ref={sectionRef}>
            <h2 className="section-title">You bring curiosity. <br />We'll turn it into confidence with AI.</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've stripped away the fluff — so you can learn what matters, faster.
            </p>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="glass-card p-4 md:p-8 rounded-2xl overflow-hidden">
              <AspectRatio ratio={16/9}>
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952')] bg-cover bg-center rounded-lg"></div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
