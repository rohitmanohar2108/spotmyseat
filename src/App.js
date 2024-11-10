import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import AIInsights from './Components/AIInsights';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <AIInsights />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;