import * as api from '../../services/student';
import * as type from '../../constants/student/deleteStudentTypes';
import fetchStudents from './fetchStudentsActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const deleteStudentRequest = () => ({
  type: type.DELETE_STUDENT_REQUEST,
});

const deleteStudentSuccess = () => ({
  type: type.DELETE_STUDENT_SUCCESS,
});

const deleteStudentFailure = (error) => ({
  type: type.DELETE_STUDENT_FAILURE,
  payload: error,
});

const deleteStudent = (id) => async (dispatch) => {
  dispatch(deleteStudentRequest());
  try {
    await api.deleteStudent(id);
    dispatch(deleteStudentSuccess());
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(deleteStudentFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchStudents());
  }
};

export default deleteStudent;
