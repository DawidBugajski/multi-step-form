import React from 'react';
import TextContent from 'components/TextContent';
import SubscriptionCards from 'routes/Subscription/SubscriptionCards';
import SwitchPayment from 'routes/Subscription/SwitchPayment';

const SelectPlan = () => {
  return (
    <div>
      <TextContent
        title='Select your plan'
        text={
          <>
            You have the option of monthly or <br />
            yearly billing
          </>
        }
      />
      <SubscriptionCards />
      <SwitchPayment />
    </div>
  );
};

export default SelectPlan;
