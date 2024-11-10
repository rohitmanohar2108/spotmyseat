import React from 'react';
import { PieChart, Wallet, TrendingUp, BrainCircuit } from 'lucide-react';

const features = [
  {
    name: 'Smart Expense Tracking',
    description: 'Automatically categorize and track your expenses with AI-powered recognition.',
    icon: PieChart,
  },
  {
    name: 'Personalized Budgeting',
    description: 'Get AI-generated budget recommendations based on your spending patterns.',
    icon: Wallet,
  },
  {
    name: 'Investment Insights',
    description: 'Receive data-driven investment suggestions tailored to your financial goals.',
    icon: TrendingUp,
  },
  {
    name: 'AI Financial Advisor',
    description: 'Chat with our AI to get instant answers to your financial questions.',
    icon: BrainCircuit,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Smart Features for Smarter Finance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to manage your money effectively, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative p-6 bg-white rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}