
import React, { useState, useEffect } from 'react';

interface Quote {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const quotes: Quote[] = [
  {
    id: 1,
    text: "AI is the defining technology of our time. It will transform every industry and reshape how we live and work.",
    author: "Satya Nadella",
    role: "Microsoft CEO",
    avatar: "/lovable-uploads/b27df829-7490-4ecd-a055-7210d7ebc042.png"
  },
  {
    id: 2,
    text: "We're in the golden age of AI. It's going to improve every aspect of our lives and business decisions.",
    author: "Jeff Bezos",
    role: "Amazon Founder",
    avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    text: "AI is already delivering profound benefits to humanity. It's not just the future — it's the present.",
    author: "Tim Cook",
    role: "Apple CEO",
    avatar: "/lovable-uploads/290a0c4b-6fb3-4b1a-b8e2-fbc9f78ba9ad.png"
  },
  {
    id: 4,
    text: "AI is one of the most important things humanity is working on. It's more profound than fire or electricity.",
    author: "Sundar Pichai",
    role: "Google CEO",
    avatar: "/lovable-uploads/5b2901ba-0d73-4a94-a58f-7d00762bd7e4.png"
  },
  {
    id: 5,
    text: "AI will be the best or worst thing ever for humanity. We need to use it wisely to unlock its full potential.",
    author: "Elon Musk",
    role: "Tesla/SpaceX CEO",
    avatar: "https://images.unsplash.com/photo-1535868647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const QuoteCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">What Global Tech Leaders Are Saying About AI</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {quotes.map(quote => (
                <div key={quote.id} className="min-w-full px-4">
                  <div className="glass-card p-8 md:p-10">
                    <p className="text-lg md:text-xl text-primary-DEFAULT mb-8 italic">"{quote.text}"</p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={quote.avatar} alt={quote.author} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-primary-DEFAULT">{quote.author}</h4>
                        <p className="text-gray-500 text-sm">{quote.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {quotes.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? 'bg-primary-DEFAULT' : 'bg-gray-300'}`} 
                onClick={() => setActiveIndex(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCarousel;
