// components/TitleSection.js
import React from 'react';

const TitleSection = ({ title, subtitle, }) => {
  return (
    <div className={`flex items-center flex-col w-full space-y-2 justify-center`}>
      <h1 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold`}>
        {title}
      </h1>
      <p className={`leading-relaxed text-gray-300 font-extralight tracking-tight `}>
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSection;
