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

/*
TODO
- komponent który będzie wyświetlać
 - Rodzaj subskrybcji (monthly/yearly) + jego koszt po prawej /mo, /yr
 - przycisk który przeniesie do kroku drugiego
 - Wybrane addony, type + cena po prawej
 - Total(per month/year)
 - Przycisk musi mieć w tym kroku napis Confirm
 */
