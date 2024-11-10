import React from 'react';
import { LineChart, ArrowUpRight, DollarSign, PiggyBank, TrendingUp } from 'lucide-react';

export default function AIInsights() {
  return (
    <div id="ai-insights" className="py-24 bg-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              AI-Powered Insights for Better Financial Decisions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our advanced AI analyzes your spending patterns, predicts future expenses, and provides personalized recommendations to help you achieve your financial goals.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600 text-white">
                    <LineChart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Spending Analysis</h3>
                  <p className="mt-2 text-gray-600">Get detailed insights into your spending habits with smart categorization.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600 text-white">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Future Predictions</h3>
                  <p className="mt-2 text-gray-600">AI-powered forecasting helps you anticipate future expenses and income.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-600 text-white">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Smart Savings</h3>
                  <p className="mt-2 text-gray-600">Automated recommendations for optimizing your savings and investments.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-6 w-6 text-violet-600" />
                    <span className="ml-2 text-sm font-medium text-violet-600">Monthly Insight</span>
                  </div>
                  <p className="mt-2 text-gray-900 font-medium">You could save ₹12,000 by optimizing your subscriptions</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <span className="ml-2 text-sm font-medium text-green-600">Investment Opportunity</span>
                  </div>
                  <p className="mt-2 text-gray-900 font-medium">Based on your profile, consider increasing your SIP by ₹5,000</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <PiggyBank className="h-6 w-6 text-orange-600" />
                    <span className="ml-2 text-sm font-medium text-orange-600">Savings Goal</span>
                  </div>
                  <p className="mt-2 text-gray-900 font-medium">You're on track to reach your emergency fund goal by June</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}