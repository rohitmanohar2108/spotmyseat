import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    description: 'Perfect for getting started',
    features: [
      'Basic expense tracking',
      'Simple budgeting tools',
      'Limited AI insights',
      'Mobile app access',
    ],
  },
  {
    name: 'Pro',
    price: '₹499',
    description: 'Best for personal finance',
    features: [
      'Advanced expense tracking',
      'Custom budgeting',
      'Full AI insights access',
      'Investment recommendations',
      'Priority support',
    ],
  },
  {
    name: 'Business',
    price: '₹999',
    description: 'For small businesses',
    features: [
      'Everything in Pro',
      'Multiple users',
      'Business analytics',
      'API access',
      'Dedicated support',
      'Custom features',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-violet-600" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-violet-600 hover:bg-violet-700">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}