
import React, { useEffect, useRef } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Education: Beyond Chatbots",
    excerpt: "How AI tools are revolutionizing personalized learning pathways and reshaping educational approaches.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 1, 2025",
    author: "Emma Thompson"
  },
  {
    id: 2,
    title: "Prompt Engineering: The New Digital Literacy",
    excerpt: "Why the ability to effectively communicate with AI systems is becoming an essential skill.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "April 25, 2025",
    author: "Michael Rivera"
  },
  {
    id: 3,
    title: "Building Your AI Stack: Essential Tools for Creators",
    excerpt: "A comprehensive guide to the AI tools every content creator needs in their workflow.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "April 18, 2025",
    author: "Sarah Chen"
  }
];

const BlogSection: React.FC = () => {
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
    <section id="blog" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 reveal" ref={sectionRef}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Stay Sharp with the Latest in AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real insights, zero fluff. Read lessons, trends, and ideas from our AI School editors and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a 
              key={post.id} 
              href="#"
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-DEFAULT mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center mt-4 text-primary-DEFAULT font-medium group-hover:text-accent transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#" className="secondary-button">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
