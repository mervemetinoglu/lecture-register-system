import '../../styles/form.scss';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchClassrooms from '../../actions/classroom/fetchClassroomsActions';
import fetchMembers from '../../actions/facultyMember/fetchMembersActions';
import createLecture from '../../actions/lecture/createLectureActions';
import updateLecture from '../../actions/lecture/updateLectureActions';
import useForm from '../../hooks/useForm';
import useSubmit from '../../hooks/useSubmit';
import ListBox from '../ListBox';
import days from '../../helpers/lectureDays';
import mandatoryStatus from '../../helpers/mandatoryStatus';

const initialLecture = {
  code: '',
  name: '',
  isMandatory: '0',
  day: '1',
  hour: '',
  classroomId: 0,
  facultyMemberId: 0,
};

const LectureForm = () => {
  const dispatch = useDispatch();
  const { classrooms } = useSelector((state) => state.classrooms);
  const classroomOptions = classrooms?.filter(
    (classroom) => classroom.parentCode
  );
  const { facultyMembers } = useSelector((state) => state.members);
  const [values, onChange, clearForm, setValues] = useForm(initialLecture);
  const location = useLocation();
  const id = location.pathname.split('/')[4];
  const handleSubmit = useSubmit([createLecture, updateLecture], id, values);
  const { lectures } = useSelector((state) => state.lectures);
  const lecture = id ? lectures.find((l) => l.id.toString() === id) : null;

  useEffect(() => {
    dispatch(fetchClassrooms());
    dispatch(fetchMembers());
  }, [dispatch]);

  useEffect(() => {
    if (lecture) setValues(lecture);
  }, [lecture]);

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="code"
          placeholder="Ders Kodu"
          required
          value={values.code}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Ders Adı"
          required
          maxLength={50}
          value={values.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="hour"
          placeholder="Saat hh:mm"
          required
          value={values.hour}
          onChange={onChange}
        />
        <div className="list__row">
          <ListBox
            setSelect={onChange}
            name="isMandatory"
            list={mandatoryStatus}
            value={values.isMandatory}
          />
          <ListBox
            setSelect={onChange}
            name="day"
            list={days}
            value={values.day}
          />
        </div>
        <div className="list__row">
          <ListBox
            setSelect={onChange}
            name="classroomId"
            list={classroomOptions}
            value={values.classroomId}
          />
          <ListBox
            setSelect={onChange}
            name="facultyMemberId"
            list={facultyMembers}
            value={values.facultyMemberId}
          />
        </div>
        <button type="submit" className="submit__btn">
          {id ? 'Güncelle' : 'Kaydet'}
        </button>
      </form>
      <button className="clear__btn" onClick={clearForm} type="button">
        Temizle
      </button>
    </div>
  );
};

export default LectureForm;
