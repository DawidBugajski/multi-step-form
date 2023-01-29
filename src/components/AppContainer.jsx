import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNextStep,
  setPrevStep,
  setSecondStep,
} from 'store/slices/stepsSlice';

const AppContainer = () => {
  const currentStep = useSelector((state) => state.steps.currentStep);
  const dispatch = useDispatch();

  const handleNextStep = () => dispatch(setNextStep());

  const handlePrevStep = () => dispatch(setPrevStep());

  const handleSecondStep = () => dispatch(setSecondStep(2));

  return (
    <div className='h-screen text-6xl text-center text-white bg-black'>
      <p className='pb-10 font-medium'>Current step:{currentStep}</p>
      <button onClick={handleNextStep} className='mr-6 bg-red-500'>
        NEXT
      </button>
      <button onClick={handlePrevStep} className='mr-6 bg-green-500'>
        PREV
      </button>
      <button onClick={handleSecondStep} className='bg-purple-500'>
        GO TO STEP 2
      </button>
    </div>
  );
};

export default AppContainer;
