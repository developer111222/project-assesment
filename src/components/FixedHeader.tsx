import React from 'react';

const FixedHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-start justify-between max-w-[1800px] mx-auto">
        {/* Left - Studio name */}
        <div className="text-left">
          <h2 className="text-sm md:text-base font-semibold text-foreground tracking-wide">
            NEXTSTUDIO
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
            Digital creative studio
          </p>
        </div>

        {/* Center - Multi-disciplined */}
        <div className="hidden md:block text-center">
          <h2 className="text-sm md:text-base font-semibold text-foreground tracking-wide">
            Multi-disciplined
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
            Design + code + content
          </p>
        </div>

        {/* Right - Location */}
        <div className="text-right">
          <h2 className="text-sm md:text-base font-semibold text-foreground tracking-wide">
            Europe based
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
            Working globally
          </p>
        </div>
      </div>
    </header>
  );
};

export default FixedHeader;
