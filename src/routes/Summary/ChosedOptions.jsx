import React from 'react';
import { useSelector } from 'react-redux';
import { paymentPeriod } from 'utils/helpers/paymentPeriod';

const ChosedOptions = () => {
  const { subType } = useSelector((state) => state.subscribeSettings);
  const { pickedAddons } = useSelector((state) => state.addons);
  const { isMonthly } = useSelector((state) => state.subscribeSettings);
  console.log(subType);
  return (
    <div className='p-3 rounded-lg bg-magnolia'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium text-darkBlue'>{subType.type}</h3>
        <p className='font-bold text-darkBlue'>
          {`$${paymentPeriod(subType.price, isMonthly)}`}
        </p>
      </div>
    </div>
  );
};

export default ChosedOptions;

/*
TODO
- komponent który będzie wyświetlać
 - Rodzaj subskrybcji (monthly/yearly) + jego koszt po prawej /mo, /yr AKTUALNIE TO JEST OBIEKT NIE TABLICA
 - przycisk który przeniesie do kroku drugiego
 - Wybrane addony, type + cena po prawej
 - Total(per month/year)
 - Przycisk musi mieć w tym kroku napis Confirm
 */
