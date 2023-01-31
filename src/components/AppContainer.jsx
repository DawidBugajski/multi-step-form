import React from 'react';
import { useSelector } from 'react-redux';
import StepNavigator from './StepNavigator';
import FormContainer from './FormContainer';
import ButtonContainer from './ButtonContainer';

const AppContainer = () => {
  const currentStep = useSelector((state) => state.steps.currentStep);

  return (
    <div className='flex flex-col h-screen overflow-hidden bg-magnolia'>
      <StepNavigator currentStep={currentStep} />
      <FormContainer />
      <div className='flex-grow'></div>
      <ButtonContainer currentStep={currentStep} />
    </div>
  );
};

export default AppContainer;

/* 

*/
