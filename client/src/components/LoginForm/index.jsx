import '../../styles/form.scss';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import login from '../../actions/auth/loginAction';

const initialUser = {
  email: '',
  password: '',
  role: 'student',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [values, onChange] = useForm(initialUser);
  const navigate = useNavigate();
  const location = useLocation();

  const callback = (type) => {
    navigate(`/${type}/dashboard`, { from: location });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(values, callback));
  };

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email adresini giriniz"
          required
          value={values.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre giriniz"
          required
          value={values.password}
          onChange={onChange}
        />
        <button className="submit__btn" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
