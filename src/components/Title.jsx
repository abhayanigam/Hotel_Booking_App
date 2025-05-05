import React from 'react';

const Title = ({ title, subTitle, align = 'center', font }) => {
  const alignmentClasses =
    align === 'left'
      ? 'md:items-start md:text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';

  // Apply margin only for center alignment
  const marginTopClasses =
    align === 'center' ? 'mt-20 md:mt-24 lg:mt-28' : 'mt-4';

  return (
    <div className={`flex flex-col justify-center ${alignmentClasses} ${marginTopClasses}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'}`}>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  );
};

export default Title;

// This component is a reusable title component that can be used in different parts of the application. It takes in props for the title, subtitle, alignment, and font style. The alignment prop allows for left, right, or center alignment of the text. The font prop allows for customization of the font style. The component uses Tailwind CSS classes for styling and layout.