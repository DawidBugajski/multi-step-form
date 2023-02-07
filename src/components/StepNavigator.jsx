import React from 'react';
import ActiveStep from 'components/ActiveStep';
import InactiveStep from 'components/InactiveStep';

const StepNavigator = ({ currentStep }) => {
  const steps = [
    { step: 1, title: 'Step 1', text: 'Your Info' },
    { step: 2, title: 'Step 2', text: 'Select Plan' },
    { step: 3, title: 'Step 3', text: 'Add-ons' },
    { step: 4, title: 'Step 4', text: 'Summary' },
  ];
  const stepsComponents = steps.map((step, i) => {
    const { step: stepNumber, title, text } = step;
    return (
      <div key={i} className='lg:flex lg:items-center lg:my-4'>
        {i + 1 === currentStep ? (
          <ActiveStep>{stepNumber}</ActiveStep>
        ) : (
          <InactiveStep>{stepNumber}</InactiveStep>
        )}
        <div className='hidden pl-3 text-sm leading-4 tracking-widest lg:flex lg:flex-col'>
          <span className='uppercase text-coolGray'>{title}</span>
          <span className='font-bold text-white uppercase'>{text}</span>
        </div>
      </div>
    );
  });
  return (
    <div className='flex justify-center h-40 bg-cover bg-sidebar-mobile lg:flex-col lg:bg-sidebar-desktop lg:h-full lg:bg-cover lg:min-w-[300px] lg:bg-bottom lg:rounded-lg lg:justify-start lg:pl-5 lg:pt-4 lg:bg-no-repeat'>
      {stepsComponents}
    </div>
  );
};

export default StepNavigator;
