import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep, setConfirmed } from 'store/slices/stepsSlice';
import { setError } from 'store/slices/personalInfoSlice';
import {
  NAME_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from 'utils/helpers/formValidate';

const ButtonNext = () => {
  const dispatch = useDispatch();
  const { phoneNumber, fullName, email } = useSelector(
    (state) => state.personalInfo
  );
  const { currentStep } = useSelector((state) => state.steps);

  const error =
    currentStep === 1 &&
    (!fullName.match(NAME_REGEX) ||
      !phoneNumber.match(PHONE_REGEX) ||
      !email.match(EMAIL_REGEX));

  const lastStep = currentStep === 4;

  const handleNextStep = () => {
    error ? dispatch(setError()) : dispatch(setNextStep());
    if (lastStep) dispatch(setConfirmed(true));
  };

  return (
    <button
      onClick={handleNextStep}
      className='py-2 px-3 font-medium text-center text-white rounded-[5px] bg-darkBlue hover:bg-purplishBlue transition-colors duration-100 ease-linear'
    >
      {lastStep ? 'Confirm' : 'Next Step'}
    </button>
  );
};

export default ButtonNext;
