import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import fetchClassrooms from '../../actions/classroom/fetchClassroomsActions';
import deleteClassroom from '../../actions/classroom/deleteClassroomActions';
import { classroomColumnNames } from '../../helpers/columnNames';

const ClassroomPage = () => {
  const dispatch = useDispatch();
  const { classrooms, isFetching } = useSelector((state) => state.classrooms);

  useEffect(() => {
    dispatch(fetchClassrooms());
  }, [dispatch]);

  if (isFetching)
    return (
      <div className="table__wrapper">
        <Spinner />
      </div>
    );

  return classrooms?.length > 0 ? (
    <Table
      values={classrooms}
      callback={deleteClassroom}
      columnNames={classroomColumnNames}
    />
  ) : (
    <div className="not_found__wrapper">
      <span>Sistemde kat/sınıf kaydı bulunmamaktadır.</span>
    </div>
  );
};

export default ClassroomPage;
