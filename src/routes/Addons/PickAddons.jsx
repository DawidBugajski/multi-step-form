import React from 'react';
import TextContent from 'components/TextContent';
import AddonCards from './AddonCards';

const PickAddons = () => {
  return (
    <>
      <TextContent
        title='Pick add-ons'
        text='Add-ons help enhance your gaming exprience'
      />
      <AddonCards />
    </>
  );
};

export default PickAddons;
