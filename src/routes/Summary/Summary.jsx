import React from 'react';
import TextContent from 'components/TextContent';
import ChosedOptions from 'routes/Summary/ChosedOptions';
import TotalCost from './TotalCost';

const Summary = () => {
  return (
    <div>
      <TextContent
        title='Finishing up'
        text='Double-check everything looks OK before confirming.'
      />
      <ChosedOptions />
      <TotalCost />
    </div>
  );
};

export default Summary;
