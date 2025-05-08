
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <section id="courses" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#01312d]">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-[#01312d]">{course.title}</CardTitle>
                  <Badge variant="outline" className="bg-[#72bf00] text-[#01312d] font-medium">{course.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#01312d] opacity-80">{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <button className="w-full py-2 bg-[#72bf00] text-[#01312d] rounded-md font-medium hover:opacity-90 transition-opacity">
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
