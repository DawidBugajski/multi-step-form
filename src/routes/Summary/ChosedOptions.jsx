import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paymentPeriod } from 'utils/helpers/paymentPeriod';
import { setSecondStep } from 'store/slices/stepsSlice';

const ChosedOptions = () => {
  const { subType } = useSelector((state) => state.subscribeSettings);
  const { pickedAddons } = useSelector((state) => state.addons);
  const { isMonthly } = useSelector((state) => state.subscribeSettings);
  const dispatch = useDispatch();
  const handleSecondStep = () => dispatch(setSecondStep());

  const header = (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col '>
        <h3 className='font-medium text-darkBlue'>
          {subType.type} {isMonthly ? '(Monthly)' : '(Yearly)'}
        </h3>
        <p
          className='underline cursor-pointer text-coolGray hover:text-purplishBlue'
          onClick={handleSecondStep}
        >
          Change
        </p>
      </div>
      <p className='font-bold text-darkBlue'>
        {`$${paymentPeriod(subType.price, isMonthly)}`}
      </p>
    </div>
  );

  const addonItems = pickedAddons.map(({ type, price }) => (
    <div key={type} className='flex items-center justify-between'>
      <p className='py-1 text-coolGray'>{type}</p>
      <p className=' text-darkBlue'>{`+$${paymentPeriod(price, isMonthly)}`}</p>
    </div>
  ));

  return (
    <div className='p-5 rounded-lg bg-magnolia'>
      {header}
      {pickedAddons.length >= 1 && <hr className='my-3' />}
      {addonItems}
    </div>
  );
};

export default ChosedOptions;
