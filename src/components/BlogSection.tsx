import React, { useEffect, useRef } from 'react';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}
const blogPosts: BlogPost[] = [{
  id: 1,
  title: "The Future of AI in Education: Beyond Chatbots",
  excerpt: "How AI tools are revolutionizing personalized learning pathways and reshaping educational approaches.",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  date: "May 1, 2025",
  author: "Emma Thompson"
}, {
  id: 2,
  title: "Prompt Engineering: The New Digital Literacy",
  excerpt: "Why the ability to effectively communicate with AI systems is becoming an essential skill.",
  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  date: "April 25, 2025",
  author: "Michael Rivera"
}, {
  id: 3,
  title: "Building Your AI Stack: Essential Tools for Creators",
  excerpt: "A comprehensive guide to the AI tools every content creator needs in their workflow.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  date: "April 18, 2025",
  author: "Sarah Chen"
}];
const BlogSection: React.FC = () => {
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
  return;
};
export default BlogSection;