import React from 'react';
import { Helmet } from 'react-helmet';
import FixedHeader from '@/components/FixedHeader';
import FixedNavigation from '@/components/FixedNavigation';
import ServicesSection from '@/components/ServicesSection';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Multi-disciplined digital creative studio offering brand design, digital development, motion and 3D, and campaign services. Europe based, working globally." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Fixed elements */}
        <FixedHeader />
        <FixedNavigation />

        {/* Main services section with scroll-driven animations */}
        <ServicesSection />
      </div>
    </>
  );
};

export default Index;
