import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110 mb-8"
          >
            <ArrowUp size={20} />
          </button>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alex Johnson
            </h3>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Creating exceptional digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" fill="currentColor" />
                <span>by Alex Johnson</span>
              </div>
              
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Alex Johnson. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;