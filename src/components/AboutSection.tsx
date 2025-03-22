
import React, { useRef, useEffect } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-0 inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-background to-background pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-4">About Reconition Research</h2>
            <p className="text-lg text-muted-foreground">
              Founded on March 9, 2025, our laboratory represents a new approach to scientific discovery.
            </p>
          </div>
          
          <div className="space-y-16">
            <div 
              ref={(el) => (elementsRef.current[1] = el)} 
              className="glass-panel p-8 opacity-0"
            >
              <h3 className="text-xl font-medium mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                Reconition Research is dedicated to pushing the boundaries of human knowledge through 
                interdisciplinary research and development. We combine expertise across multiple scientific 
                domains to tackle complex challenges and create innovative solutions.
              </p>
              <p className="text-muted-foreground">
                Our work spans artificial intelligence, robotics, mathematics, physics, chemistry, and biology, 
                with a focus on creating technologies that benefit humanity.
              </p>
            </div>
            
            <div 
              ref={(el) => (elementsRef.current[2] = el)} 
              className="glass-panel p-8 opacity-0"
            >
              <h3 className="text-xl font-medium mb-4">Coming Soon</h3>
              <p className="text-muted-foreground">
                Our website is currently under development. Check back soon for:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Detailed information about our research areas</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Profiles of our team of scientists and researchers</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Publications and research papers</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 shrink-0 rounded-full border border-primary flex items-center justify-center mr-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Collaboration opportunities</span>
                </li>
              </ul>
            </div>
            
            <div 
              id="vision"
              ref={(el) => (elementsRef.current[3] = el)} 
              className="glass-panel p-8 opacity-0"
            >
              <h3 className="text-xl font-medium mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                We envision a future where scientific discovery transcends traditional boundaries, 
                where artificial intelligence enhances human capability, and where breakthrough 
                innovations in robotics and basic sciences transform our world for the better.
              </p>
              
              <div className="mt-6 p-4 rounded-lg bg-accent/50">
                <p className="text-sm italic text-center">
                  "Our goal is to create a laboratory where brilliance knows no bounds, 
                  where the convergence of disciplines leads to extraordinary discoveries 
                  that were once thought impossible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
