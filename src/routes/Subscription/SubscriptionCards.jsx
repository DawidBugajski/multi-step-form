import React from 'react';
import { subscriptionTypes } from 'store/slices/subscribeSettingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setSubType } from 'store/slices/subscribeSettingsSlice';

const SubscriptionCards = () => {
  const dispatch = useDispatch();
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

  const handleSubscriptionType = (type) => {
    dispatch(setSubType(type));
  };

  return (
    <>
      {subscriptionTypes.map(({ type, price, icon }) => (
        <div
          onClick={() => handleSubscriptionType(type)}
          className={`flex rounded-md border-[1px] items-center p-3 mb-3 cursor-pointer ${activeSubscriptionType(
            type
          )}`}
          key={type}
        >
          <img className='pr-4' src={icon} alt={`${type} subscription icon`} />
          <div className=''>
            <h3 className='text-lg font-medium text-darkBlue'>{type}</h3>
            <p className=' text-coolGray'>{`$${paymentPeriod(price)}`}</p>
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
//TODO
// jeśli div posiada h3 które jest === subType to ma się wyróżniać kolorem borderu
// jeśli klikniesz w inny div to jego h3 ma zostać przypisane do subType
