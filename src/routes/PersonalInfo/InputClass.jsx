import { useSelector } from 'react-redux';

const InputClass = (field, regex) => {
  const error = useSelector((state) => state.personalInfo.error);
  let borderColor = 'border-coolGray';
  if (error && !field.match(regex)) borderColor = 'border-strawberryRed';
  return `text-darkBlue py-1 pl-2 font-medium border-[1px] rounded-[3px] ${borderColor} outline-none mb-3`;
};

export default InputClass;
