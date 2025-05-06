import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="text-primary-DEFAULT text-xl font-poppins font-bold">AI Scholar</span>
            </a>
            <p className="text-gray-600 mb-6">
              Empowering founders, students, entrepreneurs, and professionals to upskill in AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-DEFAULT transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-DEFAULT transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-DEFAULT transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-primary-DEFAULT font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">AI Fundamentals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Prompt Engineering</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">AI for Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Creative AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">All Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary-DEFAULT font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">AI Tools Directory</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">Learning Paths</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-DEFAULT transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary-DEFAULT font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest in AI education and tools.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Your email address" className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
                <button type="submit" className="px-4 py-2 rounded-r-lg transition-colors text-slate-50 bg-[#c1f25d]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 text-sm hover:text-primary-DEFAULT transition-colors">Terms & Conditions</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 text-sm hover:text-primary-DEFAULT transition-colors">Privacy Policy</a>
          </div>
          
          <div className="text-gray-400 text-xs">
            Designed by <a href="https://www.furiglobal.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-DEFAULT transition-colors">www.furiglobal.in</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;