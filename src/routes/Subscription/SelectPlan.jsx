import React from 'react';
import TextContent from 'components/TextContent';
import SubscriptionCards from './SubscriptionCards';

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
      <div className='flex'>
        <p>Monthly</p>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SelectPlan;
