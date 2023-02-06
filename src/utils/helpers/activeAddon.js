export const activeAddon = (type, addons) => {
  const selectedAddon = addons.find((addon) => addon.type === type);
  return selectedAddon ? 'border-pastelBlue bg-magnolia' : 'border-lightGray';
};
