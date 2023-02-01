import { useSelector } from 'react-redux';

const FormValidation = () => {
  const phone = useSelector((state) => state.personalInfo.phoneNumber);
  const name = useSelector((state) => state.personalInfo.fullName);
  const email = useSelector((state) => state.personalInfo.email);

  if (phone.length === 0 || name.length === 0 || email.length === 0) {
    return false;
  } else return true;
};

export default FormValidation;
