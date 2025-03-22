
import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 md:py-5",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-subtle" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2 text-foreground">
            <span className="text-xl font-semibold">Reconition Research</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <div className="w-px h-5 bg-border"></div>
          <a
            href="/#vision"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Vision
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
