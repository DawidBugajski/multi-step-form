import React from 'react';
import {
  setFullName,
  setPhoneNumber,
  setEmail,
} from 'store/slices/personalInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { phoneNumber, fullName, email, error } = useSelector(
    (state) => state.personalInfo
  );

  const handleSetFullName = (e) => {
    let value = e.target.value;
    if (value.length > 50) {
      value = value.slice(0, 50);
    }
    if (value.match(/\s\s/)) {
      value = value.replace(/\s\s/g, ' ');
    }
    e.target.value = value;
    dispatch(setFullName(value));
  };
  const handleSetPhoneNumber = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };
  const handleSetEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const renderErrorMessage = (field) => {
    if (error && field.length === 0) {
      return (
        <label className='text-sm font-bold text-strawberryRed'>
          This field is required
        </label>
      );
    }
    return null;
  };

  const inputClass = (field) => {
    let borderColor = 'border-coolGray';
    if (error && field.length === 0) borderColor = 'border-strawberryRed';
    return `py-1 pl-2 font-medium border-[1px] rounded-[3px] ${borderColor} outline-none mb-3`;
  };

  return (
    <div>
      <h2 className='mb-2 text-2xl font-bold text-darkBlue'>Personal info</h2>
      <p className='mb-4 text-coolGray'>
        Please provide you name, email <br />
        address and phone number.
      </p>
      <form>
        <div className='flex flex-col mb-2'>
          <div className='flex justify-between'>
            <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
              Name *
            </label>
            {renderErrorMessage(fullName)}
          </div>
          <input
            className={`${inputClass(fullName)} focus:border-purplishBlue`}
            type='text'
            id='fullName'
            placeholder='Stephen King'
            value={fullName}
            onChange={handleSetFullName}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <div className='flex justify-between'>
            <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
              Email Address *
            </label>
            {renderErrorMessage(email)}
          </div>
          <input
            className={`${inputClass(email)} focus:border-purplishBlue`}
            type='email'
            id='email'
            placeholder='stephenking@lorem.com'
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <div className='flex justify-between'>
            <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
              Phone Number *
            </label>
            {renderErrorMessage(phoneNumber)}
          </div>
          <input
            className={`${inputClass(phoneNumber)} focus:border-purplishBlue`}
            id='phoneNumber'
            placeholder='+1 123 456 790'
            value={phoneNumber}
            onChange={handleSetPhoneNumber}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

/**
 * todo
 * ustwienie fontu koloru jak coś wpisujemy [🔺]
 * zrobienie walidacji w formularzu email [🔺]
 * zrobienie walidacji w numerach telefonów [🔺]
 * refaktoryzacja kodu żeby wyjebać wszystko do utils/helpers[🔺]
 */
