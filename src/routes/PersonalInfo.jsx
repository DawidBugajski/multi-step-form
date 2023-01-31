import React from 'react';
import {
  setFullName,
  setPhoneNumber,
  setEmail,
} from 'store/slices/personalInfoSlice';
import { useDispatch } from 'react-redux';

const PersonalInfo = () => {
  const dispatch = useDispatch();

  const handleSetFullName = (e) => dispatch(setFullName(e.target.value));

  const handleSetPhoneNumber = (e) => dispatch(setPhoneNumber(e.target.value));
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
          <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
            Name
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            type='text'
            id='name'
            placeholder='Stephen King'
            onChange={handleSetFullName}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-sm font-medium text-darkBlue' htmlFor='email'>
            Email Address
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            type='email'
            id='email'
            placeholder='stephenking@lorem.com'
            onChange={handleSetEmail}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label className='text-sm font-medium text-darkBlue' htmlFor='phone'>
            Phone Number
          </label>
          <input
            className='py-1 pl-2 font-medium border-[1px] rounded-[3px] border-coolGray outline-none mb-3'
            id='phone'
            placeholder='+1 123 456 790'
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
 * klikając next -> zachowaj w state name, email adress i phone number, dla wyświetlenia tych informacji w kroku 5
 * jeśli klikniesz next a formularz nie jest wypełniony w pełni (required) show some msg with error
 */
