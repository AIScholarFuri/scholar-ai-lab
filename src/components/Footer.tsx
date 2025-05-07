import React from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="text-primary text-xl font-poppins font-bold">AI Scholar</span>
            </a>
            <p className="text-gray-600 mb-6">
              Empowering founders, students, entrepreneurs, and professionals to upskill in AI.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aischolartelugu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@aischolartelugu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/aischolartelugu" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                
              </a>
            </div>
          </div>
          
          
          
          <div>
            <h3 className="text-primary font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">AI Tools Directory</a></li>
              
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest in AI education and tools.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
                <button type="submit" className="px-4 py-2 rounded-r-lg transition-colors text-inherit bg-primary-accent">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 text-sm hover:text-primary transition-colors">Terms & Conditions</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 text-sm hover:text-primary transition-colors">Privacy Policy</a>
          </div>
          
          <div className="text-gray-400 text-xs">
            Designed by <a href="https://www.furiglobal.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.furiglobal.in</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;