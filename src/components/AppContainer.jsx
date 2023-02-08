import React from 'react';
import { useSelector } from 'react-redux';
import StepNavigator from './StepNavigator';
import FormContainer from './FormContainer';
import ButtonContainer from './ButtonContainer';

const AppContainer = () => {
  const { currentStep, isConfirmed } = useSelector((state) => state.steps);

  return (
    <div className='flex flex-col h-screen lg:justify-center bg-magnolia items '>
      <div className='lg:relative lg:bg-white lg:rounded-lg lg:flex lg:p-4 lg:w-10/12 lg:justify-between lg:mx-auto lg:shadow-2xl lg:h-4/6 xl:w-9/12 desktop:w-8/12 2xl:w-7/12'>
        <StepNavigator currentStep={currentStep} />
        <div className='flex-grow lg:overflow-hidden lg:flex lg:flex-col lg:px-14 lg:justify-between lg:pt-8 2xl:px-20'>
          <FormContainer />
          {!isConfirmed && <ButtonContainer currentStep={currentStep} />}
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
