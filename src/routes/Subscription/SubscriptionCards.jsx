import React from 'react';
import { subscriptionTypes } from 'store/slices/subscribeSettingsSlice';
import { useSelector } from 'react-redux';

const SubscriptionCards = () => {
  const { subType, isMonthly } = useSelector(
    (state) => state.subscribeSettings
  );
  console.log(subType, isMonthly);
  return (
    <>
      {subscriptionTypes.map(({ type, price, icon }) => (
        <div
          className='flex rounded-md border-[1px] border-lightGray items-center p-3 mb-3'
          key={type}
        >
          <img className='pr-4' src={icon} alt={`${type} subscription icon`} />
          <div className=''>
            <h3 className='font-medium text-darkBlue'>{type}</h3>
            <p className='text-sm text-coolGray'>{price.monthly}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubscriptionCards;

//TODO
// zwerfykiować ten cały slice.
// jak sprawdzić czy to działa, ustawić defaultowo Arcade i ostylować żeby wybrany zawsze miał inny background
// jeśli div posiada h3 które jest === subType to ma się wyróżniać kolorem borderu
// jeśli klikniesz w inny div to jego h3 ma zostać przypisane do subType
// mapując moje elementy muszę sprawdzić, który div zawiera w sobie h3 które jest równe z typ co jest w stanie subscribeSettingsSlice w subType
