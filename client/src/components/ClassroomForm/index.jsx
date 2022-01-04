import '../../styles/form.scss';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import createClassroom from '../../actions/classroom/createClassroomActions';
import updateClassroom from '../../actions/classroom/updateClassroomActions';
import useForm from '../../hooks/useForm';
import useSubmit from '../../hooks/useSubmit';
import ListBox from '../ListBox';
import classroomType from '../../helpers/classroomType';

const initialClassroom = {
  code: '',
  name: '',
  parentCode: '',
  type: '1',
};

const ClassroomForm = () => {
  const [values, onChange, clearForm, setValues] = useForm(initialClassroom);
  const location = useLocation();
  const id = location.pathname.split('/')[4];
  const handleSubmit = useSubmit(
    [createClassroom, updateClassroom],
    id,
    values
  );
  const { classrooms } = useSelector((state) => state.classrooms);
  const classroom = id ? classrooms.find((c) => c.id.toString() === id) : null;

  useEffect(() => {
    if (classroom) setValues(classroom);
  }, [classroom]);

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="code"
            placeholder={values.type === '1' ? 'Sınıf Kodu' : 'Kat Kodu'}
            value={values.code}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder={values.type === '1' ? 'Sınıf Adı' : 'Kat Adı'}
            maxLength={50}
            required
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div>
          {values.type === '1' && (
            <input
              type="text"
              name="parentCode"
              placeholder="Sınıf Ana Kodu"
              maxLength={50}
              value={values.parentCode}
              onChange={onChange}
            />
          )}
        </div>
        <div className="list__row">
          <ListBox
            setSelect={onChange}
            name="type"
            list={classroomType}
            value={values.type}
          />
        </div>
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

export default ClassroomForm;
