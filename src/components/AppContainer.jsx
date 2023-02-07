import React from 'react';
import { useSelector } from 'react-redux';
import StepNavigator from './StepNavigator';
import FormContainer from './FormContainer';
import ButtonContainer from './ButtonContainer';

const AppContainer = () => {
  const { currentStep, isConfirmed } = useSelector((state) => state.steps);

  return (
    <div className='flex flex-col h-screen overflow-hidden lg:justify-center bg-magnolia items'>
      <div className='lg:relative lg:bg-white lg:rounded-lg lg:flex lg:p-4 lg:w-10/12 lg:justify-center lg:mx-auto lg:shadow-lg lg:h-3/5'>
        <StepNavigator currentStep={currentStep} />
        <FormContainer />
        {!isConfirmed && <ButtonContainer currentStep={currentStep} />}
      </div>
    </div>
  );
};

export default AppContainer;
