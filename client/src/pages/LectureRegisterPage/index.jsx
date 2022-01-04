import './lectureRegister.scss';
import '../../components/Table/table.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import fetchLectures from '../../actions/lecture/fetchLecturesActions';
import createLectureRegister from '../../actions/lectureRegister/createLectureRegister';
import fetchLectureRegister from '../../actions/lectureRegister/fetchLectureRegister';
import { lectureColumnNames } from '../../helpers/columnNames';
import { displayErrorMessage } from '../../helpers/displayToastMessages';
import useUser from '../../hooks/useUser';

const LectureRegisterPage = () => {
  const dispatch = useDispatch();
  const [loginStudent, studentEmail] = useUser();
  const { lectures, isFetching } = useSelector((state) => state.lectures);
  const { lectureRegisters } = useSelector((state) => state.fetchRegisters);

  useEffect(() => {
    dispatch(fetchLectures());
  }, [dispatch]);

  useEffect(() => {
    if (loginStudent) dispatch(fetchLectureRegister(loginStudent.id));
  }, [dispatch, loginStudent?.id]);

  const addLecture = (lectureId) => {
    const register = {
      code: `LR${lectureId}${loginStudent.id}`,
      lectureId,
      studentId: loginStudent.id,
    };
    const selected = lectureRegisters.some(
      (lecture) => lecture.lectureId === lectureId
    );

    if (lectureRegisters.length < 5 && !selected) {
      dispatch(createLectureRegister(register, loginStudent.id));
    } else if (selected)
      displayErrorMessage('Seçtiğiniz dersi tekrar seçemezsiniz!');
    else displayErrorMessage('Daha fazla ders seçemezsiniz.');
  };

  if (isFetching)
    return (
      <div className="register__page">
        <Spinner />
      </div>
    );

  return (
    <div className="register__page">
      <header className="register__header">
        <div>{studentEmail || 'Öğrenci email adresi'}</div>
      </header>
      <div className="register__wrapper">
        {lectures?.length > 0 ? (
          <div className="table">
            <table>
              <thead>
                <tr>
                  {lectureColumnNames.map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                  <th />
                </tr>
              </thead>
              <tbody>
                {lectures.map((lecture, index) => (
                  <tr key={index}>
                    {Object.entries(lecture).map((value, idx) => {
                      if (value[0] !== 'id')
                        return <td key={idx}>{value[1]}</td>;
                      return null;
                    })}
                    <td>
                      <button
                        type="button"
                        onClick={() => addLecture(lecture.id)}
                      >
                        Ders Ekle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="not_found__wrapper">
            <span>Sistemde ders kaydı bulunmamaktadır.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureRegisterPage;
