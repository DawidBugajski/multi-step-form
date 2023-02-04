import React from 'react';
import TextContent from 'components/TextContent';

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
    </div>
  );
};

export default SelectPlan;
