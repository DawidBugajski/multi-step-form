import React from 'react';
import {
  setFullName,
  setPhoneNumber,
  setEmail,
} from 'store/slices/personalInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  NAME_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from 'utils/helpers/formValidate';
import RenderErrorMessage from 'routes/PersonalInfo/RenderErrorMessage';
import InputClass from 'routes/PersonalInfo/InputClass';
import TextContent from 'components/TextContent';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { phoneNumber, fullName, email } = useSelector(
    (state) => state.personalInfo
  );

  const handleSetFullName = (e) => {
    dispatch(setFullName(e.target.value));
  };
  const handleSetPhoneNumber = (e) => {
    dispatch(setPhoneNumber(e.target.value));
  };
  const handleSetEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div>
      <TextContent
        title='Personal info'
        text={
          <>
            Please provide you name, email <br />
            address and phone number{' '}
            <span className='font-bold'>with area code.</span>
          </>
        }
      />
      <form>
        <div className='flex flex-col mb-2'>
          <div className='flex justify-between'>
            <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
              Name <span className='text-strawberryRed'>*</span>
            </label>
            {RenderErrorMessage(fullName, NAME_REGEX, 'Wrong Name')}
          </div>
          <input
            className={`${InputClass(
              fullName,
              NAME_REGEX
            )} focus:border-purplishBlue`}
            type='text'
            id='fullName'
            placeholder='Stephen King (max 30 characters)'
            value={fullName}
            onChange={handleSetFullName}
          />
        </div>
        <div className='flex flex-col mb-2'>
          <div className='flex justify-between'>
            <label className='text-sm font-medium text-darkBlue' htmlFor='name'>
              Email Address <span className='text-strawberryRed'>*</span>
            </label>
            {RenderErrorMessage(email, EMAIL_REGEX, 'Wrong Email Address')}
          </div>
          <input
            className={`${InputClass(
              email,
              EMAIL_REGEX
            )} focus:border-purplishBlue`}
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
              Phone Number <span className='text-strawberryRed'>*</span>
            </label>
            {RenderErrorMessage(phoneNumber, PHONE_REGEX, 'Wrong Number')}
          </div>
          <input
            className={`${InputClass(
              phoneNumber,
              PHONE_REGEX
            )} focus:border-purplishBlue`}
            id='phoneNumber'
            placeholder='+12 123 456 790'
            value={phoneNumber}
            onChange={handleSetPhoneNumber}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
