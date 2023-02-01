import React from 'react';
import { setPrevStep } from 'store/slices/stepsSlice';
import { useDispatch } from 'react-redux';

const ButtonPrev = () => {
  const dispatch = useDispatch();
  const handlePrevStep = () => dispatch(setPrevStep());
  return (
    <button
      onClick={handlePrevStep}
      className='py-2 px-3 font-medium text-center text-white rounded-[5px] bg-darkBlue'
    >
      Prev Step
    </button>
  );
};

export default ButtonPrev;
