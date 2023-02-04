import React from 'react';
import { subscriptionTypes } from 'store/slices/subscribeSettingsSlice';
import { useSelector } from 'react-redux';

const SubscriptionCards = () => {
  const { subType, isMonthly } = useSelector(
    (state) => state.subscribeSettings
  );

  const activeSubscriptionType = (type) => {
    return type === subType
      ? 'border-pastelBlue bg-magnolia'
      : 'border-lightGray';
  };

  const paymentPeriod = (price) => {
    return isMonthly ? `${price.monthly}/mo` : `${price.yearly}/yr`;
  };

  return (
    <>
      {subscriptionTypes.map(({ type, price, icon }) => (
        <div
          className={`flex rounded-md border-[1px] items-center p-2 mb-3 ${activeSubscriptionType(
            type
          )}`}
          key={type}
        >
          <img className='pr-4' src={icon} alt={`${type} subscription icon`} />
          <div className='leading-4'>
            <h3 className='font-medium text-darkBlue'>{type}</h3>
            <p className='text-sm text-coolGray'>{`$${paymentPeriod(
              price
            )}`}</p>
            {!isMonthly && (
              <span className='text-xs text-darkBlue '>2 months free</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default SubscriptionCards;
//TODO
// jeśli div posiada h3 które jest === subType to ma się wyróżniać kolorem borderu
// jeśli klikniesz w inny div to jego h3 ma zostać przypisane do subType
