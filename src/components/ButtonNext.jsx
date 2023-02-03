import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep } from 'store/slices/stepsSlice';
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

  const error =
    !fullName.match(NAME_REGEX) ||
    !phoneNumber.match(PHONE_REGEX) ||
    !email.match(EMAIL_REGEX);

  const handleNextStep = () =>
    error ? dispatch(setError()) : dispatch(setNextStep());

  return (
    <button
      onClick={handleNextStep}
      className='py-2 px-3 font-medium text-center text-white rounded-[5px] bg-darkBlue hover:bg-purplishBlue transition-colors duration-100 ease-linear'
    >
      Next Step
    </button>
  );
};

export default ButtonNext;
