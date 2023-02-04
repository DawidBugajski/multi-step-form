import React from 'react';
import ButtonNext from './ButtonNext';
import ButtonPrev from './ButtonPrev';

const ButtonContainer = ({ currentStep }) => {
  const classes = 'flex bg-white p-4 justify';
  const className = currentStep >= 2 ? `${classes}-between` : `${classes}-end`;

  return (
    <div className={className}>
      {currentStep >= 2 && <ButtonPrev />}
      <ButtonNext />
    </div>
  );
};

export default ButtonContainer;
