import React from 'react';
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';

const ButtonContainer = ({ currentStep }) => {
  const classes = 'flex bg-white p-4';
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
