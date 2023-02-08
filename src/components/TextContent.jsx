import React from 'react';

const TextContent = ({ title, text, children }) => {
  return (
    <div>
      <h2 className='mb-2 text-2xl font-bold text-darkBlue lg:text-4xl 2xl:text-[40px]'>
        {title}
      </h2>
      <p className='mb-4 text-lg tracking-tighter text-coolGray lg:mb-8 lg:tracking-normal'>
        {text}
      </p>
      {children}
    </div>
  );
};

export default TextContent;
