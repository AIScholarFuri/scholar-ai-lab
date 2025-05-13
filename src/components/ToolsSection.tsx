
import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageSquare, Video, Image, Code, Database, Music } from "lucide-react";

type Category = 'image' | 'research' | 'development' | 'avatar' | 'llm' | 'video';

interface Tool {
  name: string;
  description: string;
  category: Category;
  logo: string | React.ReactNode;
}

const tools: Tool[] = [
  // Image Generation
  { name: 'Midjourney', description: 'Advanced image generation', category: 'image', logo: '/lovable-uploads/916c6db1-1fb7-409c-bfc1-7e50343dff90.png' },
  { name: 'Leonardo', description: 'AI-powered design assistant', category: 'image', logo: '/lovable-uploads/39325815-5a85-4691-a8f2-3a37808bbf03.png' },
  { name: 'DALL·E', description: 'OpenAI\'s image creator', category: 'image', logo: '/lovable-uploads/7ee30d8c-5a1a-4065-90e1-b6ffececa7dd.png' },
  { name: 'Flux', description: 'Next-gen image synthesis', category: 'image', logo: <Image className="w-full h-full text-primary" /> },
  { name: 'Reve', description: 'Creative image generation', category: 'image', logo: <Image className="w-full h-full text-primary" /> },
  
  // Research & Writing
  { name: 'Perplexity', description: 'AI research assistant', category: 'research', logo: '/lovable-uploads/45818f28-f44c-4b91-9e82-0f64cb1c933c.png' },
  { name: 'Claude', description: 'Anthropic\'s conversational AI', category: 'research', logo: '/lovable-uploads/fde4ae9e-11a0-4463-b32d-768e57a32b34.png' },
  { name: 'Grok', description: 'Realtime information analysis', category: 'research', logo: '/lovable-uploads/0fae5fda-b45a-4879-ba97-64f87a27a7ad.png' },
  { name: 'O3', description: 'Advanced research synthesis', category: 'research', logo: <Database className="w-full h-full text-primary" /> },
  { name: 'Deep Research', description: 'In-depth research tools', category: 'research', logo: <Database className="w-full h-full text-primary" /> },
  
  // Web Development
  { name: 'Lovable', description: 'AI-powered web development', category: 'development', logo: '/lovable-uploads/1aec2bbb-3aa1-44e7-8758-e6ba77f6c20f.png' },
  { name: 'Bolt', description: 'Rapid prototyping with AI', category: 'development', logo: '/lovable-uploads/5efe0a14-1acd-42e6-8f17-ae4c4a9c456c.png' },
  { name: 'Replit', description: 'Collaborative coding with AI', category: 'development', logo: '/lovable-uploads/b494d212-1447-49c5-8781-696182d563fd.png' },
  { name: 'Cursor', description: 'AI-enhanced code editor', category: 'development', logo: <Code className="w-full h-full text-primary" /> },
  { name: 'Windsurf', description: 'Modern web framework tools', category: 'development', logo: <Code className="w-full h-full text-primary" /> },
  
  // AI Avatar / Voice Cloning / Music
  { name: 'ElevenLabs', description: 'Voice cloning technology', category: 'avatar', logo: '/lovable-uploads/83c4b9d2-56df-4de5-aa30-a86052661a4e.png' },
  { name: 'HeyGen', description: 'AI video avatars', category: 'avatar', logo: '/lovable-uploads/5d37fa00-467c-4e22-a315-a277cac008b5.png' },
  { name: 'Synthesia', description: 'AI video generation', category: 'avatar', logo: '/lovable-uploads/0e86b8f8-6dbc-435b-ac0b-1dea3228d9a4.png' },
  { name: 'Suno', description: 'AI music generation', category: 'avatar', logo: <Music className="w-full h-full text-primary" /> },
  
  // Large Language Models
  { name: 'ChatGPT', description: 'OpenAI\'s conversational AI', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  { name: 'Gemini', description: 'Google\'s multimodal AI', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  { name: 'DeepSeek', description: 'Advanced reasoning engine', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  { name: 'Claude', description: 'Anthropic\'s language model', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  { name: 'LLaMA', description: 'Meta\'s open language model', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  { name: 'Grok', description: 'X\'s conversational AI', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" /> },
  
  // Video Generation
  { name: 'Kling', description: 'Video creation assistant', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'Sora', description: 'OpenAI\'s text-to-video', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'Veo 2', description: 'Next-gen video synthesis', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'Runway', description: 'Creative video generation', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'HaiLuo', description: 'Cinematic AI videos', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'InVideo', description: 'Professional video creation', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'Higgsfield', description: 'Dynamic video rendering', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
  { name: 'Luma Dream Machine', description: 'Dreamlike video effects', category: 'video', logo: <Video className="w-full h-full text-primary" /> },
];

const categories = [
  { id: 'image', name: 'Image Generation' },
  { id: 'research', name: 'Research & Writing' },
  { id: 'development', name: 'Web Development' },
  { id: 'avatar', name: 'AI Avatar / Voice Cloning / Music' },
  { id: 'llm', name: 'Large Language Models' },
  { id: 'video', name: 'Video Generation' },
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
                  ? 'bg-primary-accent text-primary font-medium' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id as Category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <Card 
              key={`${tool.name}-${index}`}
              className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {typeof tool.logo === 'string' ? (
                    <AspectRatio ratio={1/1} className="relative overflow-hidden rounded-md">
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`} 
                        className="object-contain w-full h-full"
                      />
                    </AspectRatio>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {tool.logo}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
