import React from 'react';
import { BarChart2, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-violet-500" />
              <span className="ml-2 text-2xl font-bold text-white">SmartSpend</span>
            </div>
            <p className="mt-4 text-gray-300 max-w-md">
              Making personal finance management smarter and more accessible through AI-powered insights and tools.
            </p>
            <div className="mt-6 flex space-x-6">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-violet-500" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-violet-500" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-violet-500" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-base text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 SmartSpend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}