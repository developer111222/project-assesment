import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

// Import images
import brandDesignImg from '@/assets/brand-design.png';
import digitalDevImg from '@/assets/digital-development.png';
import motion3dImg from '@/assets/motion-3d.png';
import campaignsImg from '@/assets/campaigns.png';

// Service data
const services = [
  {
    number: '01',
    title: 'Brand Design',
    description: 'Helping brands shape a clear and memorable identity that stands out and builds the trust needed to turn customers into loyal fans.',
    tags: ['Logo Design', 'Rebranding', 'Visual Identity', 'Messaging', 'Brand Guidelines'],
    layout: 'left' as const,
    imageUrl: brandDesignImg,
  },
  {
    number: '02',
    title: 'Digital Development',
    description: 'Building digital products that feel effortless to use and give businesses the tools, systems and experiences that help them grow smoothly.',
    tags: ['Web Design', 'Webflow Build', 'Apps Development', 'UI', 'UX', 'Automatizations'],
    layout: 'center' as const,
    imageUrl: digitalDevImg,
  },
  {
    number: '03',
    title: 'Motion and 3D',
    description: 'Turning ideas into dynamic visuals and animations that elevate your message and give your brand the striking presence it needs.',
    tags: ['Motion Graphics', '3D Visuals', 'Animations', 'Product Renders', 'Promo Visuals'],
    layout: 'right' as const,
    imageUrl: motion3dImg,
  },
  {
    number: '04',
    title: 'Campaigns',
    description: 'Creating campaigns with clear strategy and strong creative that reach the right people and turn their attention into real results.',
    tags: ['Ad Creatives', 'Strategy', 'Ads', 'Content Campaigns', 'Social Campaigns'],
    layout: 'left' as const,
    imageUrl: campaignsImg,
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      if (sectionTop < viewportHeight && sectionBottom > 0) {
        const totalScrollDistance = sectionHeight - viewportHeight;
        const scrolled = -sectionTop;
        const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
        setScrollProgress(progress);
      } else {
        if (sectionTop >= viewportHeight) {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation phases:
  // Phase 1: 0 - Brackets visible with small gap
  // Phase 2: 0-0.25 - SERVICES text types in, brackets stay tight to text
  // Phase 3: 0.30-1.0 - Cards push title up

  // Text typing animation
  const textProgress = Math.max(0, Math.min(1, scrollProgress / 0.25));
  const visibleLetters = Math.floor(textProgress * 8);
  
  // Cards phase
  const cardsProgress = Math.max(0, (scrollProgress - 0.30) / 0.70);
  const titleOffset = cardsProgress * -400;
  const titleOpacity = Math.max(0, 1 - cardsProgress * 2.5);
  const titleScale = 1 - (cardsProgress * 0.2);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[400vh] bg-background"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Title container - moves up as cards come in */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            transform: `translateY(${titleOffset}px) scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          {/* Brackets + Text - inline, brackets tight to content */}
          <div className="flex items-center justify-center">
            {/* Left bracket - always visible */}
            <span className="bracket mr-1 md:mr-2">[</span>
            
            {/* SERVICES text - types in letter by letter */}
            <span className="services-title text-foreground">
              {'SERVICES'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-grid"
                  style={{
                    opacity: index < visibleLetters ? 1 : 0,
                    transform: index < visibleLetters ? 'translateY(0)' : 'translateY(40px)',
                    transition: 'transform 0.2s ease-out, opacity 0.15s ease-out',
                    width: index < visibleLetters ? 'auto' : '0',
                    overflow: 'hidden',
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            
            {/* Right bracket - always visible */}
            <span className="bracket ml-1 md:ml-2">]</span>
          </div>
        </div>

        {/* Cards container */}
        <div 
          className="absolute inset-x-0 top-24 bottom-24 px-4 md:px-8 lg:px-12 overflow-y-auto scrollbar-hide"
          style={{
            transform: `translateY(${(1 - cardsProgress) * 100}%)`,
            opacity: Math.min(1, cardsProgress * 3),
          }}
        >
          <div className="max-w-[1600px] mx-auto space-y-4 py-4">
            {services.map((service, index) => {
              const cardDelay = index * 0.06;
              const cardProgress = Math.max(0, Math.min(1, (cardsProgress - cardDelay) / 0.20));
              
              return (
                <div
                  key={service.number}
                  style={{
                    opacity: cardProgress,
                    transform: `translateY(${(1 - cardProgress) * 50}px)`,
                  }}
                >
                  <ServiceCard
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    tags={service.tags}
                    layout={service.layout}
                    imageUrl={service.imageUrl}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
