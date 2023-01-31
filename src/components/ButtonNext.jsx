import React from 'react';
import { useDispatch } from 'react-redux';
import { setNextStep } from 'store/slices/stepsSlice';

const ButtonNext = () => {
  const dispatch = useDispatch();
  const handleNextStep = () => dispatch(setNextStep());

  return (
    <button
      onClick={handleNextStep}
      className='py-2 px-3 font-medium text-center text-white rounded-[5px] bg-darkBlue'
    >
      Next Step
    </button>
  );
};

export default ButtonNext;
