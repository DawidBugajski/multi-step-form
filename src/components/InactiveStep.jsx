import React from 'react';

const InactiveStep = ({ children }) => {
  return (
    <div className='mx-2 mt-8 font-bold leading-8 text-center text-white border-[1px] border-white rounded-full w-9 h-9'>
      {children}
    </div>
  );
};

export default InactiveStep;
