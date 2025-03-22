
import React, { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const section = sectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Only apply effect when section is in view
        if (scrollY >= sectionTop - window.innerHeight && 
            scrollY <= sectionTop + sectionHeight) {
          
          const yValue = (scrollY - sectionTop) * 0.2;
          section.style.backgroundPositionY = `${yValue}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-background to-background opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in-up">
            <span className="badge animate-pulse-subtle">
              Founded March 9, 2025
            </span>
          </div>
          
          <h1 className="headline mb-6 animate-fade-in">
            Welcome to 
            <span className="block text-primary mt-2">Reconition Research</span>
          </h1>
          
          <p className="subtitle mx-auto mb-10 animate-fade-in animate-delay-300">
            An invention laboratory dedicated to research and development in the fields of
            artificial intelligence, robotics, mathematics, physics, chemistry, and biology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-500">
            <a 
              href="#about"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn More
            </a>
            <a 
              href="#vision"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Our Vision
            </a>
          </div>
        </div>
        
        <div className="mt-24 max-w-5xl mx-auto glass-panel p-8 animate-fade-in animate-delay-700">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-4">Pioneering the Future Through Multidisciplinary Research</h2>
            <p className="text-muted-foreground">
              Our state-of-the-art laboratory brings together experts across disciplines to solve
              humanity's most pressing challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 rounded-lg bg-accent/50 text-center">
              <div className="text-lg font-medium mb-2">Artificial Intelligence</div>
              <p className="text-sm text-muted-foreground">Advanced machine learning research</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/50 text-center">
              <div className="text-lg font-medium mb-2">Robotics</div>
              <p className="text-sm text-muted-foreground">Next-generation autonomous systems</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/50 text-center">
              <div className="text-lg font-medium mb-2">Sciences</div>
              <p className="text-sm text-muted-foreground">Mathematics, physics, chemistry & biology</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-fade-in animate-delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
