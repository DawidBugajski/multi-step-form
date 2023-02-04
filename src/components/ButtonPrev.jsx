import React from 'react';
import { setPrevStep } from 'store/slices/stepsSlice';
import { useDispatch } from 'react-redux';

const ButtonPrev = () => {
  const dispatch = useDispatch();
  const handlePrevStep = () => dispatch(setPrevStep());
  return (
    <button
      onClick={handlePrevStep}
      className='px-3 py-2 font-medium text-center transition-colors duration-100 ease-linear text-coolGray hover:text-darkBlue'
    >
      Go Back
    </button>
  );
};

export default ButtonPrev;
