import '../../styles/form.scss';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import createMember from '../../actions/facultyMember/createMemberActions';
import updateMember from '../../actions/facultyMember/updateMemberActions';
import useForm from '../../hooks/useForm';
import useSubmit from '../../hooks/useSubmit';

const initialMember = {
  code: '',
  name: '',
  surname: '',
  email: '',
  startDate: '',
};

const FacultyMemberForm = () => {
  const [values, onChange, clearForm, setValues] = useForm(initialMember);
  const location = useLocation();
  const id = location.pathname.split('/')[4];
  const handleSubmit = useSubmit([createMember, updateMember], id, values);
  const { facultyMembers } = useSelector((state) => state.members);
  const member = id ? facultyMembers.find((m) => m.id.toString() === id) : null;

  useEffect(() => {
    if (member) setValues(member);
  }, [member]);

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="code"
            placeholder="Öğretim Görevlisi Kodu"
            required
            maxLength={10}
            value={values.code}
            onChange={onChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Öğretim Görevlisi Adı"
            required
            maxLength={50}
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="surname"
            placeholder="Öğretim Görevlisi Soyadı"
            required
            maxLength={50}
            value={values.surname}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Öğretim Görevlisi Email"
            required
            value={values.email}
            onChange={onChange}
          />
        </div>
        <input
          type="date"
          name="startDate"
          required
          value={values.startDate}
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

export default FacultyMemberForm;
