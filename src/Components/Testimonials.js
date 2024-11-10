import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'SmartSpend has transformed how I manage my business finances. The AI insights are incredibly accurate and helpful.',
  },
  {
    name: 'Rahul Verma',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The investment recommendations have helped me make better decisions with my savings. Highly recommended!',
  },
  {
    name: 'Anita Desai',
    role: 'Freelancer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'As a freelancer, tracking expenses was always a challenge. SmartSpend makes it effortless and intuitive.',
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-24 bg-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by Users
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Here's what our community has to say about SmartSpend
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-1 text-violet-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}