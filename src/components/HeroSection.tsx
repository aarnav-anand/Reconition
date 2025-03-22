
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gray-200 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6 text-gray-800">
            Reconition Research
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 font-playfair">
            An invention laboratory dedicated to research and development in the fields of
            artificial intelligence, robotics, mathematics, physics, chemistry, and biology.
          </p>
          
          <a 
            href="#about"
            className="inline-flex items-center justify-center rounded bg-gray-800 px-8 py-3 text-sm font-medium text-white hover:bg-gray-700 transition-colors font-playfair"
          >
            Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
