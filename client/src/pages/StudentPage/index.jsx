import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import fetchStudents from '../../actions/student/fetchStudentsActions';
import deleteStudent from '../../actions/student/deleteStudentActions';
import { studentColumnNames } from '../../helpers/columnNames';

const StudentPage = () => {
  const dispatch = useDispatch();
  const { students, isFetching } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (isFetching)
    return (
      <div className="table__wrapper">
        <Spinner />
      </div>
    );

  return students?.length > 0 ? (
    <Table
      values={students}
      callback={deleteStudent}
      columnNames={studentColumnNames}
    />
  ) : (
    <div className="not_found__wrapper">
      <span>Sistemde öğrenci kaydı bulunmamaktadır.</span>
    </div>
  );
};

export default StudentPage;
