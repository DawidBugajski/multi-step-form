import React from 'react';
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';

const ButtonContainer = ({ currentStep }) => {
  return (
    <div className='flex justify-end p-4 bg-white'>
      {currentStep >= 2 && <ButtonPrev />}
      <ButtonNext />
    </div>
  );
};

export default ButtonContainer;
