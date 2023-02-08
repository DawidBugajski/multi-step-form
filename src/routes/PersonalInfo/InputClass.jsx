import { useSelector } from 'react-redux';

const InputClass = (field, regex) => {
  const error = useSelector((state) => state.personalInfo.error);
  let borderColor = 'border-lightGray';
  if (error && !field.match(regex)) borderColor = 'border-strawberryRed';
  return `text-darkBlue py-2 pl-2 font-medium border-[1px] rounded-[5px] ${borderColor} outline-none mb-3 mt-1 2xl:py-3 2xl:text-lg`;
};

export default InputClass;
