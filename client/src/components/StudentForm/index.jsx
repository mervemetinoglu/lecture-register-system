import '../../styles/form.scss';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import createStudent from '../../actions/student/createStudentActions';
import updateStudent from '../../actions/student/updateStudentActions';
import signup from '../../actions/auth/signupAction';
import useForm from '../../hooks/useForm';

const initialStudent = {
  code: '',
  name: '',
  surname: '',
};

const createUser = {
  email: '',
  password: '',
  role: 'student',
};

const StudentForm = () => {
  const dispatch = useDispatch();
  const [values, onChange, clearForm, setValues] = useForm(initialStudent);
  const [user, setUser] = useState(createUser);
  const location = useLocation();
  const id = location.pathname.split('/')[4];
  const { students } = useSelector((state) => state.students);
  const student = id ? students.find((s) => s.id.toString() === id) : null;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateStudent(id, values));
    } else {
      dispatch(createStudent(values));
      dispatch(signup(user));
    }
  };

  useEffect(() => {
    setUser({
      ...user,
      email: `${values.code}@ege.edu.tr`,
      password: `${values.code}`,
    });
  }, [values.code]);

  useEffect(() => {
    if (student) setValues(student);
  }, [student]);

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="code"
            required
            placeholder="Öğrenci Kodu"
            maxLength={10}
            value={values.code}
            onChange={onChange}
          />
        </div>
        <input
          type="text"
          name="name"
          required
          placeholder="Öğrenci Adı"
          maxLength={50}
          value={values.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="surname"
          required
          placeholder="Öğrenci Soyadı"
          maxLength={50}
          value={values.surname}
          onChange={onChange}
        />
        <button className="submit__btn" type="submit">
          Kaydet
        </button>
      </form>
      <button className="clear__btn" onClick={clearForm} type="button">
        Temizle
      </button>
    </div>
  );
};

export default StudentForm;
