import React from 'react';
import {
  setFullName,
  setPhoneNumber,
  setEmail,
} from 'store/slices/personalInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const fullName = useSelector((state) => state.personalInfo.fullName);
  const phoneNumber = useSelector((state) => state.personalInfo.phoneNumber);
  const email = useSelector((state) => state.personalInfo.email);
  const error = useSelector((state) => state.personalInfo.error);

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
  const handleSetEmail = (e) => dispatch(setEmail(e.target.value));

  return (
    <div>
      <h2 className='mb-2 text-2xl font-bold text-darkBlue'>Personal info</h2>
      <p className='mb-4 text-coolGray'>
        Please provide you name, email <br />
        address and phone number.
      </p>
      <form>
        <div className='flex flex-col mb-2'>
          {error && <label>First Name can't be Empty</label>}
          <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
            Name *
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            type='text'
            id='name'
            placeholder='Stephen King'
            value={fullName}
            onChange={handleSetFullName}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-sm font-medium text-darkBlue' htmlFor='email'>
            Email Address *
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            type='email'
            id='email'
            placeholder='stephenking@lorem.com'
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-sm font-medium text-darkBlue' htmlFor='phone'>
            Phone Number *
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            id='phone'
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
 * styliacja:
 * - kolor borderu po kliku
 * - kolor tekstu
 * - te errorry zajebane
 * klikając next -> zachowaj w state name, email adress i phone number, dla wyświetlenia tych informacji w kroku 5 [✅]
 * jeśli klikniesz next a formularz nie jest wypełniony w pełni (required) show some msg with error
 */
