import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchStudents from '../actions/student/fetchStudentsActions';

const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { students } = useSelector((state) => state.students);
  const loginStudent = user.data?.email
    ? students?.find(
        (student) => student.code === user.data.email.split('@')[0]
      )
    : null;

  const studentEmail = user.data?.email;

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return [loginStudent, studentEmail];
};

export default useUser;
