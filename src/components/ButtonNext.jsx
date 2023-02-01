import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep } from 'store/slices/stepsSlice';
import { setError } from 'store/slices/personalInfoSlice';

const ButtonNext = () => {
  const dispatch = useDispatch();
  const { phoneNumber, fullName, email } = useSelector(
    (state) => state.personalInfo
  );

  const handleNextStep = () => {
    if (
      phoneNumber.length === 0 ||
      fullName.length === 0 ||
      email.length === 0
    ) {
      dispatch(setError());
    } else {
      dispatch(setNextStep());
      console.log(
        `username:${fullName}, email addres: ${email}, phone number:${phoneNumber}`
      );
    }
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
