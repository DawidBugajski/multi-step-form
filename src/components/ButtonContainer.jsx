import React from 'react';
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';

const ButtonContainer = ({ currentStep }) => {
  const classes =
    'absolute bottom-0 w-full flex bg-white p-4 lg:bg-transparent lg:p-0 lg:flex lg:w-auto lg:static lg:mb-8';
  const className =
    currentStep >= 2 ? `${classes} justify-between` : `${classes} justify-end`;

  return (
    <div className={className}>
      {currentStep >= 2 && <ButtonPrev />}
      <ButtonNext />
    </div>
  );
};

export default ButtonContainer;
