import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-16 pb-20 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Take Control of Your</span>
            <span className="block text-violet-600">Financial Future</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            AI-powered personal finance that helps you save smarter, spend wiser, and build wealth faster.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-violet-700">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-violet-600 hover:text-violet-600">
              Watch Demo
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-violet-600 mr-2" />
              <span>AI-Powered Insights</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-violet-600 mr-2" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-violet-600 mr-2" />
              <span>Free Forever Plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}