import React from 'react';
import { Sun, Headphones } from 'lucide-react';

const FixedNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="pill-nav shadow-2xl shadow-background/50">
        {/* Logo/Headphones icon */}
        <button 
          className="flex items-center justify-center w-12 h-12 rounded-full 
                     text-foreground/70 hover:text-foreground hover:bg-muted/50
                     transition-all duration-300"
          aria-label="Audio"
        >
          <Headphones className="w-5 h-5" />
        </button>

        {/* Contact button */}
        <button 
          className="flex items-center justify-center px-6 py-3 rounded-full
                     bg-primary text-primary-foreground font-medium text-sm
                     hover:bg-primary/90 transition-all duration-300
                     shadow-lg shadow-primary/25"
        >
          Contact
        </button>

        {/* Menu text */}
        <button 
          className="flex items-center justify-center px-6 py-3 rounded-full
                     text-foreground/70 hover:text-foreground hover:bg-muted/50
                     font-medium text-sm transition-all duration-300"
        >
          Menu
        </button>

        {/* Theme toggle */}
        <button 
          className="flex items-center justify-center w-12 h-12 rounded-full 
                     bg-muted/50 text-foreground/70 hover:text-foreground
                     transition-all duration-300"
          aria-label="Toggle theme"
        >
          <Sun className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default FixedNavigation;
