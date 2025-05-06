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
  return <section id="blog" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal" ref={sectionRef}>
          <h2 className="section-title">Latest Insights from AI Scholar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the latest trends, tools, and techniques in AI education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <div key={post.id} className="glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary font-medium hover:underline">Read more →</a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BlogSection;