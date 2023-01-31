import React from 'react';

const ActiveStep = ({ children }) => {
  return (
    <div className='mx-2 mt-8 font-bold leading-8 text-center border-[1px] rounded-full border-pastelBlue w-9 h-9 bg-pastelBlue text-darkBlue'>
      {children}
    </div>
  );
};

export default ActiveStep;
