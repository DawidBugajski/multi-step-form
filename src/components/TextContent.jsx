import React from 'react';

const TextContent = ({ title, text, children }) => {
  return (
    <div>
      <h2 className='mb-2 text-2xl font-bold text-darkBlue'>{title}</h2>
      <p className='mb-4 text-coolGray'>{text}</p>
      {children}
    </div>
  );
};

export default TextContent;
