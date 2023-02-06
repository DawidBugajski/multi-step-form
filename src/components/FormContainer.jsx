import React from 'react';
import { useSelector } from 'react-redux';
import SelectPlan from 'routes/Subscription/SelectPlan';
import PickAddons from 'routes/Addons/PickAddons';
import Summary from 'routes/Summary/Summary';
import PersonalInfo from 'routes/PersonalInfo/PersonalInfo';

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
    <div className='w-11/12 p-6 mx-auto -mt-[47px] bg-white rounded-[0.7rem] shadow-xl'>
      {displayCurrentStep()}
    </div>
  );
};

export default FormContainer;
