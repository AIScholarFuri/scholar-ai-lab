
import React, { useState, useEffect, useRef } from 'react';

type Category = 'image' | 'research' | 'development' | 'avatar';

interface Tool {
  name: string;
  description: string;
  category: Category;
}

const tools: Tool[] = [
  { name: 'Midjourney', description: 'Advanced image generation', category: 'image' },
  { name: 'Leonardo', description: 'AI-powered design assistant', category: 'image' },
  { name: 'DALL·E', description: 'OpenAI\'s image creator', category: 'image' },
  { name: 'Perplexity', description: 'AI research assistant', category: 'research' },
  { name: 'Claude', description: 'Anthropic\'s conversational AI', category: 'research' },
  { name: 'Grok', description: 'Realtime information analysis', category: 'research' },
  { name: 'Lovable', description: 'AI-powered web development', category: 'development' },
  { name: 'Bolt', description: 'Rapid prototyping with AI', category: 'development' },
  { name: 'Replit', description: 'Collaborative coding with AI', category: 'development' },
  { name: 'ElevenLabs', description: 'Voice cloning technology', category: 'avatar' },
  { name: 'HeyGen', description: 'AI video avatars', category: 'avatar' },
  { name: 'Synthesia', description: 'AI video generation', category: 'avatar' },
];

const categories = [
  { id: 'image', name: 'Image Generation' },
  { id: 'research', name: 'Research & Writing' },
  { id: 'development', name: 'Web Development' },
  { id: 'avatar', name: 'AI Avatar & Voice' },
];

const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('image');
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
  
  const filteredTools = tools.filter(tool => tool.category === activeCategory);
  
  return (
    <section id="tools" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 reveal" ref={sectionRef}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Building with AI: Tools for Every Vision</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the best AI tools for every aspect of your work, from creation to development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm md:text-base transition-all ${
                  activeCategory === category.id 
                  ? 'bg-primary-accent text-primary-DEFAULT font-medium' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id as Category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div 
              key={tool.name}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-accent/20 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-DEFAULT">
                  {tool.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary-DEFAULT mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
