
import React, { useEffect, useRef } from 'react';

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Master the core concepts of artificial intelligence',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    badge: 'Beginner',
  },
  {
    id: 2,
    title: 'Prompt Engineering',
    description: 'Craft perfect prompts for any AI tool',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    badge: 'Intermediate',
  },
  {
    id: 3,
    title: 'AI for Business',
    description: 'Apply AI to transform your business operations',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    badge: 'Advanced',
  },
  {
    id: 4,
    title: 'Creative AI',
    description: 'Generate images, videos, and more with AI',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    badge: 'Specialized',
  },
];

const CoursesSection: React.FC = () => {
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
    <section id="courses" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal" ref={sectionRef}>
          <h2 className="section-title">Courses Designed for Real Life, Not Just Resumes</h2>
          <p className="text-xl text-gray-600">
            Learn AI by actually using it. No jargon. No gatekeeping. Just real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={`${course.title} course`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary-DEFAULT">{course.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs bg-primary-accent text-primary-DEFAULT font-medium">
                    {course.badge}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-primary-DEFAULT font-medium flex items-center group-hover:text-accent transition-colors"
                  >
                    Start Learning
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <span className="text-gray-400 text-sm">8 Modules</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#" className="primary-button">View All Courses</a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
