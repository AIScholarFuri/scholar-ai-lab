import React, { useState, useEffect } from 'react';
interface Quote {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}
const quotes: Quote[] = [{
  id: 1,
  text: "AI will be the defining technology of our generation. Those who master it will shape the future of work and innovation.",
  author: "Sarah Johnson",
  role: "CTO at TechForward",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}, {
  id: 2,
  text: "The companies that flourish in the next decade will be those that harness AI not just as a tool, but as a collaborative partner.",
  author: "Michael Chen",
  role: "AI Research Lead, FutureVision",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}, {
  id: 3,
  text: "AI education isn't just about technical skills—it's about reimagining what's possible in every industry.",
  author: "Elena Rodriguez",
  role: "Founder, InnovateLab",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}];
const QuoteCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">What the World's Tech Giants Are Saying About AI</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {quotes.map(quote => <div key={quote.id} className="min-w-full px-4">
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
                </div>)}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {quotes.map((_, index) => <button key={index} className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? 'bg-primary-DEFAULT' : 'bg-gray-300'}`} onClick={() => setActiveIndex(index)} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default QuoteCarousel;