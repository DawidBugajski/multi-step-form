import { useSelector } from 'react-redux';

const RenderErrorMessage = (field, regex, message) => {
  const error = useSelector((state) => state.personalInfo.error);

  if (error && !field.match(regex)) {
    return (
      <label className='text-sm font-bold text-strawberryRed'>{message}</label>
    );
  }
  return null;
};

export default RenderErrorMessage;
