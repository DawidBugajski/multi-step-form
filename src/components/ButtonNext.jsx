import React from 'react';
import { useDispatch } from 'react-redux';
import { setNextStep } from 'store/slices/stepsSlice';
import FormValidation from 'utils/helpers/FormValidation';

const ButtonNext = () => {
  const dispatch = useDispatch();
  const isFormValid = FormValidation();

  const handleNextStep = () => {
    // Trzeba tutaj dodać żeby pokazywało error jeśli jest nie tak
    if (isFormValid) dispatch(setNextStep());
  };

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

// On ma tylko sprawdzać czy w PersonalInfo.jsx error zwraca true, jeśli tak to ma być handleNextStep
