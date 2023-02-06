export const activeSubscriptionType = (type, subType) => {
  return type === subType.type
    ? 'border-pastelBlue bg-magnolia'
    : 'border-lightGray';
};
