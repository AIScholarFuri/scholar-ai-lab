import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageSquare, Video, Image, Code, Database, Music, ExternalLink } from "lucide-react";

type Category = 'image' | 'research' | 'development' | 'avatar' | 'llm' | 'video';

interface Tool {
  name: string;
  description: string;
  category: Category;
  logo: string | React.ReactNode;
  url: string; // Added URL property for each tool
}

const tools: Tool[] = [
  // Image Generation
  { name: 'Midjourney', description: 'Advanced image generation', category: 'image', logo: '/lovable-uploads/f8795a0b-1876-42f2-a5a2-d768428adef9.png', url: 'https://www.midjourney.com' },
  { name: 'Leonardo', description: 'AI-powered design assistant', category: 'image', logo: '/lovable-uploads/3de02a15-8679-4931-b8ed-229294ff83e8.png', url: 'https://leonardo.ai' },
  { name: 'DALL·E', description: 'OpenAI\'s image creator', category: 'image', logo: '/lovable-uploads/6eb93428-9f94-43c3-b378-bc8d818d9641.png', url: 'https://openai.com/dall-e/' },
  { name: 'Flux', description: 'Next-gen image synthesis', category: 'image', logo: <Image className="w-full h-full text-primary" />, url: 'https://www.flux-ai.io' },
  { name: 'Reve', description: 'Creative image generation', category: 'image', logo: <Image className="w-full h-full text-primary" />, url: 'https://www.reve.art' },
  
  // Research & Writing
  { name: 'Perplexity', description: 'AI research assistant', category: 'research', logo: '/lovable-uploads/45818f28-f44c-4b91-9e82-0f64cb1c933c.png', url: 'https://www.perplexity.ai' },
  { name: 'Claude', description: 'Anthropic\'s conversational AI', category: 'research', logo: '/lovable-uploads/fde4ae9e-11a0-4463-b32d-768e57a32b34.png', url: 'https://claude.ai' },
  { name: 'Grok', description: 'Realtime information analysis', category: 'research', logo: '/lovable-uploads/d0f984a5-d0b7-4004-ad5f-3bee841da26f.png', url: 'https://grok.x.ai' },
  { name: 'O3', description: 'Advanced research synthesis', category: 'research', logo: <Database className="w-full h-full text-primary" />, url: 'https://openai.com' },
  { name: 'Deep Research', description: 'In-depth research tools', category: 'research', logo: <Database className="w-full h-full text-primary" />, url: 'https://deepresearch.ai' },
  
  // Web Development
  { name: 'Lovable', description: 'AI-powered web development', category: 'development', logo: '/lovable-uploads/1aec2bbb-3aa1-44e7-8758-e6ba77f6c20f.png', url: 'https://lovable.app' },
  { name: 'Bolt', description: 'Rapid prototyping with AI', category: 'development', logo: '/lovable-uploads/5efe0a14-1acd-42e6-8f17-ae4c4a9c456c.png', url: 'https://www.bolt.new' },
  { name: 'Replit', description: 'Collaborative coding with AI', category: 'development', logo: '/lovable-uploads/b494d212-1447-49c5-8781-696182d563fd.png', url: 'https://replit.com' },
  { name: 'Cursor', description: 'AI-enhanced code editor', category: 'development', logo: <Code className="w-full h-full text-primary" />, url: 'https://cursor.sh' },
  { name: 'Windsurf', description: 'Modern web framework tools', category: 'development', logo: <Code className="w-full h-full text-primary" />, url: 'https://windsurf.dev' },
  
  // AI Avatar / Voice Cloning / Music
  { name: 'ElevenLabs', description: 'Voice cloning technology', category: 'avatar', logo: '/lovable-uploads/83c4b9d2-56df-4de5-aa30-a86052661a4e.png', url: 'https://elevenlabs.io' },
  { name: 'HeyGen', description: 'AI video avatars', category: 'avatar', logo: '/lovable-uploads/5d37fa00-467c-4e22-a315-a277cac008b5.png', url: 'https://heygen.com' },
  { name: 'Synthesia', description: 'AI video generation', category: 'avatar', logo: '/lovable-uploads/0e86b8f8-6dbc-435b-ac0b-1dea3228d9a4.png', url: 'https://synthesia.io' },
  { name: 'Suno', description: 'AI music generation', category: 'avatar', logo: <Music className="w-full h-full text-primary" />, url: 'https://suno.ai' },
  
  // Large Language Models
  { name: 'GPT', description: 'OpenAI\'s conversational AI', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" />, url: 'https://chat.openai.com' },
  { name: 'Gemini', description: 'Google\'s multimodal AI', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" />, url: 'https://gemini.google.com' },
  { name: 'DeepSeek', description: 'Advanced reasoning engine', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" />, url: 'https://www.chat.deepseek.com' },
  { name: 'Claude', description: 'Anthropic\'s language model', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" />, url: 'https://claude.ai' },
  { name: 'LLaMA', description: 'Meta\'s open language model', category: 'llm', logo: <MessageSquare className="w-full h-full text-primary" />, url: 'https://llama.meta.com' },
  { name: 'Grok', description: 'X\'s conversational AI', category: 'llm', logo: '/lovable-uploads/d0f984a5-d0b7-4004-ad5f-3bee841da26f.png', url: 'https://grok.x.ai' },
  
  // Video Generation
  { name: 'Kling', description: 'Video creation assistant', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://www.klingai.com' },
  { name: 'Sora', description: 'OpenAI\'s text-to-video', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://openai.com/sora' },
  { name: 'Veo 2', description: 'Next-gen video synthesis', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://deepmind.google/technologies/veo/' },
  { name: 'Runway', description: 'Creative video generation', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://runwayml.com' },
  { name: 'HaiLuo', description: 'Cinematic AI videos', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://hailuoai.com' },
  { name: 'InVideo', description: 'Professional video creation', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://invideo.io' },
  { name: 'Higgsfield', description: 'Dynamic video rendering', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://higgsfield.ai' },
  { name: 'Luma Dream Machine', description: 'Dreamlike video effects', category: 'video', logo: <Video className="w-full h-full text-primary" />, url: 'https://lumalabs.ai/dream-machine' },
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
            <a 
              key={`${tool.name}-${index}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card 
                className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
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
                  <div className="flex items-center gap-1 text-lg font-bold text-primary mb-2 group-hover:text-accent">
                    <span>{tool.name}</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </div>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
