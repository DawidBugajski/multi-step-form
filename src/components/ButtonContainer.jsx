import React from 'react';
import ButtonNext from './ButtonNext';

const ButtonContainer = ({ currentStep }) => {
  return (
    <div className='flex justify-end p-4 bg-white'>
      <ButtonNext />
    </div>
  );
};

export default ButtonContainer;
