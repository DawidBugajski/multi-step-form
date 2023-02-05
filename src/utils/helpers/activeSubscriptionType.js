export const activeSubscriptionType = (type, subType) => {
  return type === subType
    ? 'border-pastelBlue bg-magnolia'
    : 'border-lightGray';
};
