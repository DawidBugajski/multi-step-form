import React from 'react';
import { Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSubPayment } from 'store/slices/subscribeSettingsSlice';

const SwitchPayment = () => {
  const dispatch = useDispatch();
  const { isMonthly } = useSelector((state) => state.subscribeSettings);
  const handlePaymentSwitch = () => {
    dispatch(setSubPayment());
  };

  const activeClass = (isActive) => {
    return isActive ? 'px-6 font-bold text-darkBlue' : 'px-6 text-coolGray';
  };

  return (
    <div className='flex items-center justify-center p-4 mt-8 mb-2 rounded-md bg-magnolia'>
      <label className={activeClass(isMonthly)}>Monthly</label>
      <Switch checked={isMonthly} onChange={handlePaymentSwitch} />
      <label className={activeClass(!isMonthly)}>Yearly</label>
    </div>
  );
};

export default SwitchPayment;
