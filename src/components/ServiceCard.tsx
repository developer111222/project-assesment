import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  layout?: 'left' | 'right' | 'center';
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  tags,
  imageUrl,
  layout = 'left',
  className = '',
}) => {
  const renderContent = () => {
    if (layout === 'left') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full p-4">
       
           <div className="flex flex-col justify-between h-full">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h3>
            <span className="text-sm text-muted-foreground font-display">{number}</span>
          </div>
          
       
          
          {/* Description and tags on right */}
          <div className="items-center md:p-10 p-1 space-y-4">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="service-tag text-xs">
                  [{tag.toUpperCase()}]
                </span>
              ))}
            </div>
          </div>


   {/* Image in right */}
          {imageUrl && (
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

        </div>
      );
    }

    if (layout === 'right') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center p-4">

  {/* TITLE – FIRST ON MOBILE, THIRD ON DESKTOP */}
  <div className="order-1 md:order-3 flex flex-col justify-between items-start md:items-end h-full">
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h3>
    <span className="text-sm text-muted-foreground font-display">
      {number}
    </span>
  </div>

  {/* IMAGE – SECOND ON MOBILE, FIRST ON DESKTOP */}
  {imageUrl && (
    <div className="order-2 md:order-1 aspect-[4/3] rounded-xl overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  )}

  {/* CONTENT – THIRD ON MOBILE, SECOND ON DESKTOP */}
  <div className="order-3 md:order-2 md:p-10 p-1 space-y-4">
    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
      {description}
    </p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="service-tag text-xs">
          [{tag.toUpperCase()}]
        </span>
      ))}
    </div>
  </div>

</div>

      );
    }

    // Center layout
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-center p-4">
        {/* image on center */}
         <div className="flex flex-col justify-between h-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground font-display">{number}</span>
        </div>

 {/* Image on center */}
        {imageUrl && (
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        
        {/* Description and tags in center */}
             <div className="items-center md:p-10 p-1 space-y-4">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="service-tag text-xs">
                [{tag.toUpperCase()}]
              </span>
            ))}
          </div>
        </div>
        
       
      </div>
    );
  };

  return (
    <div className={`card-glass min-h-[280px] ${className}`}>
      {renderContent()}
    </div>
  );
};

export default ServiceCard;
