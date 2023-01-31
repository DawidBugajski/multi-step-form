import React from 'react';
import ActiveStep from 'components/ActiveStep';
import InactiveStep from 'components/InactiveStep';

const StepNavigator = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];
  const stepsComponents = steps.map((step, i) => {
    return i + 1 === currentStep ? (
      <ActiveStep key={i}>{step}</ActiveStep>
    ) : (
      <InactiveStep key={i}>{step}</InactiveStep>
    );
  });

  return (
    <div className='flex justify-center h-40 bg-cover bg-sidebar-mobile'>
      {stepsComponents}
    </div>
  );
};

export default StepNavigator;

/*
todo:
- component styling [✅]
- writing logic to make the current step refresh dynamically [✅]
*/
