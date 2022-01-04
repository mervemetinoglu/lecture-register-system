import * as api from '../../services/student';
import * as type from '../../constants/student/fetchStudentsTypes';
import { displayErrorMessage } from '../../helpers/displayToastMessages';

const fetchStudentsRequest = () => ({
  type: type.GET_STUDENTS_REQUEST,
});

const fetchStudentsSuccess = (students) => ({
  type: type.GET_STUDENTS_SUCCESS,
  payload: students,
});

const fetchStudentsFailure = (error) => ({
  type: type.GET_STUDENTS_FAILURE,
  payload: error,
});

const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsRequest());
  try {
    const { data } = await api.fetchStudents();
    dispatch(fetchStudentsSuccess(data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default fetchStudents;
