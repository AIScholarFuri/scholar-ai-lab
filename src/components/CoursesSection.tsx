
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const courses = [{
  id: 1,
  title: 'AI Fundamentals',
  description: 'Master the core concepts of artificial intelligence',
  image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  badge: 'Beginner'
}, {
  id: 2,
  title: 'Prompt Engineering',
  description: 'Craft perfect prompts for any AI tool',
  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  badge: 'Intermediate'
}, {
  id: 3,
  title: 'AI for Business',
  description: 'Apply AI to transform your business operations',
  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  badge: 'Advanced'
}, {
  id: 4,
  title: 'Creative AI',
  description: 'Generate images, videos, and more with AI',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  badge: 'Specialized'
}];

const CoursesSection: React.FC = () => {
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
  
  return (
    <section id="courses" className="py-16 bg-gray-50 reveal" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive AI courses designed for all skill levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="outline" className="bg-primary-accent text-primary">
                    {course.badge}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-end">
                <button className="text-primary hover:text-primary-accent transition-colors">
                  Learn more →
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
