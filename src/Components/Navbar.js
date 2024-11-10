import React, { useState } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
          <div className="h-10 w-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>

            <span className="ml-2 text-2xl font-bold text-gray-900">SmartSpend</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-violet-600">Features</a>
            <a href="#ai-insights" className="text-gray-600 hover:text-violet-600">AI Insights</a>
            <a href="#pricing" className="text-gray-600 hover:text-violet-600">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-violet-600">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-violet-600 px-4 py-2">
              Login
            </button>
            <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
              Start Free Trial
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Features</a>
            <a href="#ai-insights" className="block px-3 py-2 text-gray-600 hover:text-violet-600">AI Insights</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Pricing</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-violet-600">Testimonials</a>
            <div className="mt-4 space-y-2">
              <button className="w-full text-center text-gray-600 hover:text-violet-600 px-4 py-2">
                Login
              </button>
              <button className="w-full bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}