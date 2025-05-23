import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
const FinalCTASection: React.FC = () => {
  return <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Are You Ready?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">Take the first step towards mastering AI. Our guidance provides practical skills that will transform your career and vision.</p>
          
          <a href="https://chat.whatsapp.com/Ed1TnDysXkFG9y4RHJc2e5" target="_blank" rel="noopener noreferrer" className="primary-button text-lg px-8 py-4 inline-flex items-center gap-2">
            <WhatsappIcon className="w-5 h-5" />
            Join Free Community
          </a>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;