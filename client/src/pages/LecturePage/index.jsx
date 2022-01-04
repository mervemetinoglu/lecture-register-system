import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import fetchLectures from '../../actions/lecture/fetchLecturesActions';
import deleteLecture from '../../actions/lecture/deleteLectureActions';
import { lectureColumnNames } from '../../helpers/columnNames';

const LecturePage = () => {
  const dispatch = useDispatch();
  const { lectures, isFetching } = useSelector((state) => state.lectures);

  useEffect(() => {
    dispatch(fetchLectures());
  }, [dispatch]);

  if (isFetching)
    return (
      <div className="table__wrapper">
        <Spinner />
      </div>
    );

  return lectures?.length > 0 ? (
    <Table
      values={lectures}
      callback={deleteLecture}
      columnNames={lectureColumnNames}
    />
  ) : (
    <div className="not_found__wrapper">
      <span>Sistemde ders kaydı bulunmamaktadır.</span>
    </div>
  );
};

export default LecturePage;
