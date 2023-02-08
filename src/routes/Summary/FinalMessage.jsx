import React from 'react';
import TextContent from 'components/TextContent';
import { useSelector } from 'react-redux';

const FinalMessage = () => {
  const { phoneNumber, fullName, email } = useSelector(
    (state) => state.personalInfo
  );

  const phoneNumberWithoutAreaCode = phoneNumber
    .slice(3)
    .replace(/(\d{3})/g, '$1 ')
    .trim();

  return (
    <div className='pb-12 text-center'>
      <img
        className='py-4 mx-auto scale-75 lg:scale-100'
        src='images/icon-thank-you.svg'
        alt='icon-thank-you'
      />
      <TextContent
        title='Thank You!'
        text={
          <>
            <strong className=' text-darkBlue'>{fullName}</strong>, Thank you
            for purchasing a subscription! The details have been sent to your
            email address:{' '}
            <strong className='break-all text-darkBlue'>{email}</strong>, and
            also at phone number:
            <strong className=' text-darkBlue'>
              {' '}
              {phoneNumberWithoutAreaCode}
            </strong>
            . We hope you will enjoy using our platform. If you ever need
            support, please email us at support@loremgaming.com
          </>
        }
      />
    </div>
  );
};

export default FinalMessage;
