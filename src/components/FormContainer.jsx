import React from 'react';
import { useSelector } from 'react-redux';
import SelectPlan from 'routes/Subscription/SelectPlan';
import PickAddons from 'routes/Addons/PickAddons';
import Summary from 'routes/Summary/Summary';
import PersonalInfo from 'routes/PersonalInfo/PersonalInfo';
import FinalMessage from 'routes/Summary/FinalMessage';

const FormContainer = () => {
  const { currentStep, isConfirmed } = useSelector((state) => state.steps);

  const displayCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;
      case 4:
        return isConfirmed ? <FinalMessage /> : <Summary />;
      default:
        return null;
    }
  };

  return (
    <div className='w-11/12 p-6 mx-auto -mt-[61px] bg-white rounded-[0.7rem] shadow-xl lg:shadow-none lg:m-0 lg:px-20 lg:pt-10'>
      {displayCurrentStep()}
    </div>
  );
};

export default FormContainer;
