import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    const { name, value } = event.target;

    if (name === 'classroomId' || name === 'facultyMemberId') {
      setValues({
        ...values,
        [name]: parseInt(value),
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return [values, onChange, clearForm, setValues];
};

export default useForm;
