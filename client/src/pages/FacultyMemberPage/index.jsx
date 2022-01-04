import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import fetchMembers from '../../actions/facultyMember/fetchMembersActions';
import deleteMember from '../../actions/facultyMember/deleteMemberActions';
import { memberColumnNames } from '../../helpers/columnNames';

const FacultyMemberPage = () => {
  const dispatch = useDispatch();
  const { facultyMembers, isFetching } = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  if (isFetching)
    return (
      <div className="table__wrapper">
        <Spinner />
      </div>
    );

  return facultyMembers?.length > 0 ? (
    <Table
      values={facultyMembers}
      callback={deleteMember}
      columnNames={memberColumnNames}
    />
  ) : (
    <div className="not_found__wrapper">
      <span>Sistemde öğretim görevlisi kaydı bulunmamaktadır.</span>
    </div>
  );
};

export default FacultyMemberPage;
