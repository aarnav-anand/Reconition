
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-playfair text-gray-800">Reconition Research</a>
        </div>
        
        <div className="flex items-center">
          <a
            href="#about"
            className="text-sm font-playfair text-gray-600 hover:text-gray-800 transition-colors"
          >
            Our Mission
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
