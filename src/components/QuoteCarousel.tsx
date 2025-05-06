
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
    text: "AI will be the defining technology of our generation. Those who master it will shape the future of work and innovation.",
    author: "Sarah Johnson",
    role: "CTO at TechForward",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    text: "The companies that flourish in the next decade will be those that harness AI not just as a tool, but as a collaborative partner.",
    author: "Michael Chen",
    role: "AI Research Lead, FutureVision",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    text: "AI education isn't just about technical skills—it's about reimagining what's possible in every industry.",
    author: "Elena Rodriguez",
    role: "Founder, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const QuoteCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">What the World's Tech Giants Are Saying About AI</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {quotes.map((quote) => (
                <div key={quote.id} className="min-w-full px-4">
                  <div className="glass-card p-8 md:p-10">
                    <svg width="45" height="36" className="mb-6 text-primary-accent" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 10.9 26.3021 8.44721 25.0711 6.32813C24.6145 5.61328 24.6797 4.69336 25.2128 4.04297L25.4333 3.78516C25.691 3.49219 26.0299 3.28125 26.4082 3.17578C26.7865 3.07031 27.1868 3.07324 27.5634 3.18457C29.7879 3.90234 31.7835 5.10059 33.4312 6.68555C37.5261 10.6477 39.8554 16.3687 39.8554 22.4766C39.8554 26.0845 37.4008 28.9687 32.9204 28.9687C28.7005 28.9687 25.6255 25.8937 25.6255 21.6738C25.6255 17.4539 28.7005 14.3789 32.9204 14.3789C33.3397 14.3789 33.9286 14.4368 34.3242 14.5265C33.9012 11.8793 32.691 9.40332 30.8648 7.41211C29.5839 5.99707 28.0138 4.87793 26.2489 4.12598C24.9504 3.58887 23.8897 4.8125 24.6649 5.96484C25.3208 6.94043 25.7344 8.11523 25.8635 9.36328C25.9004 9.74414 25.9179 10.1309 25.9179 10.5235C25.9179 19.0792 18.9557 26.0414 10.4 26.0414C10.2563 26.0414 10.1138 26.0373 9.97129 26.0303C16.4312 25.6143 21.6738 20.1534 21.6738 13.5C21.6738 6.04416 15.6296 0 8.17383 0H13.5ZM40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27C47.9558 27 54 20.9558 54 13.5C54 10.9 53.3021 8.44721 52.0711 6.32813C51.6145 5.61328 51.6797 4.69336 52.2128 4.04297L52.4333 3.78516C52.691 3.49219 53.0299 3.28125 53.4082 3.17578C53.7865 3.07031 54.1868 3.07324 54.5634 3.18457C56.7879 3.90234 58.7835 5.10059 60.4312 6.68555C64.5261 10.6477 66.8554 16.3687 66.8554 22.4766C66.8554 26.0845 64.4009 28.9687 59.9204 28.9687C55.7005 28.9687 52.6255 25.8937 52.6255 21.6738C52.6255 17.4539 55.7005 14.3789 59.9204 14.3789C60.3397 14.3789 60.9286 14.4368 61.3242 14.5265C60.9012 11.8793 59.691 9.40332 57.8648 7.41211C56.5839 5.99707 55.0138 4.87793 53.2489 4.12598C51.9504 3.58887 50.8897 4.8125 51.6649 5.96484C52.3208 6.94043 52.7344 8.11523 52.8635 9.36328C52.9004 9.74414 52.9179 10.1309 52.9179 10.5235C52.9179 19.0792 45.9557 26.0414 37.4 26.0414C37.2563 26.0414 37.1138 26.0373 36.9713 26.0303C43.4312 25.6143 48.6738 20.1534 48.6738 13.5C48.6738 6.04416 42.6296 0 35.1738 0H40.5Z" transform="translate(-9 -9) scale(0.5)"/>
                    </svg>
                    
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
