import React from 'react';
import { useSelector } from 'react-redux';
import SelectPlan from 'routes/SelectPlan';
import PickAddons from 'routes/PickAddons';
import Summary from 'routes/Summary';
import PersonalInfo from 'routes/PersonalInfo';

const FormContainer = () => {
  const currentStep = useSelector((state) => state.steps.currentStep);

  const displayCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;
      case 4:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className='w-11/12 px-5 pt-8 pb-3 mx-auto -mt-16 bg-white rounded-[0.7rem] shadow-xl'>
      {displayCurrentStep()}
    </div>
  );
};

export default FormContainer;
