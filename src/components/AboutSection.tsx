
import React from 'react';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-24 bg-gray-100 relative"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair tracking-tight mb-4 text-gray-800">Reconition Research</h2>
            <p className="text-base text-gray-600 font-playfair italic">
              Founded on March 9, 2025
            </p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-playfair mb-6 text-gray-800 text-center">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed font-playfair">
              Reconition Research is dedicated to pushing the boundaries of human knowledge through 
              interdisciplinary research and development. We combine expertise across multiple scientific 
              domains to tackle complex challenges and create innovative solutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-playfair">
              Our work spans artificial intelligence, robotics, mathematics, physics, chemistry, and biology, 
              with a focus on creating technologies that benefit humanity.
            </p>
            
            <div className="p-6 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-gray-700 italic text-center font-playfair text-sm">
                "Our goal is to create a laboratory where brilliance knows no bounds, 
                where the convergence of disciplines leads to extraordinary discoveries 
                that were once thought impossible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
