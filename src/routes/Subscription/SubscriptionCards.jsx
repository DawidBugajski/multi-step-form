import React from 'react';
import { subscriptionTypes } from 'store/slices/subscribeSettingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setSubType } from 'store/slices/subscribeSettingsSlice';
import { paymentPeriod } from 'utils/helpers/paymentPeriod';
import { activeSubscriptionType } from 'utils/helpers/activeSubscriptionType';

const SubscriptionCards = () => {
  const dispatch = useDispatch();
  const { subType, isMonthly } = useSelector(
    (state) => state.subscribeSettings
  );

  const handleSubscriptionType = (type) => dispatch(setSubType(type));

  return (
    <>
      {subscriptionTypes.map(({ type, price, icon }) => (
        <div
          onClick={() => handleSubscriptionType(type)}
          className={`flex rounded-lg border-[1px] items-center p-3 mb-3 cursor-pointer ${activeSubscriptionType(
            type,
            subType
          )}`}
          key={type}
        >
          <img className='pr-4' src={icon} alt={`${type} subscription icon`} />
          <div>
            <h3 className='text-lg font-medium text-darkBlue'>{type}</h3>
            <p className=' text-coolGray'>{`$${paymentPeriod(
              price,
              isMonthly
            )}`}</p>
            {!isMonthly && (
              <span className='text-sm font-medium text-darkBlue'>
                2 months free
              </span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SubscriptionCards;
