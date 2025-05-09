
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Master the core concepts of artificial intelligence',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    badge: 'Beginner'
  },
  {
    id: 2,
    title: 'Prompt Engineering',
    description: 'Craft perfect prompts for any AI tool',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    badge: 'Intermediate'
  },
  {
    id: 3,
    title: 'AI for Business',
    description: 'Apply AI to transform your business operations',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    badge: 'Advanced'
  },
  {
    id: 4,
    title: 'Creative AI',
    description: 'Generate images, videos, and more with AI',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    badge: 'Specialized'
  }
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
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 reveal" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Our Courses</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Master AI skills with our hands-on courses designed for real-world application
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <Card key={course.id} className="glass-card hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{course.title}</CardTitle>
                  <Badge variant="outline" className="bg-primary-accent text-primary">
                    {course.badge}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <button className="w-full primary-button">
                  Learn More
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
