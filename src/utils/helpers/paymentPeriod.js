export const paymentPeriod = (price, isMonthly) => {
  return isMonthly ? `${price.monthly}/mo` : `${price.yearly}/yr`;
};
