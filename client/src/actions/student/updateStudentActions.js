import * as api from '../../services/student';
import * as type from '../../constants/student/updateStudentTypes';
import fetchStudents from './fetchStudentsActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const updateStudentRequest = () => ({
  type: type.UPDATE_STUDENT_REQUEST,
});

const updateStudentSuccess = (updatedStudent) => ({
  type: type.UPDATE_STUDENT_SUCCESS,
  payload: updatedStudent,
});

const updateStudentFailure = (error) => ({
  type: type.UPDATE_STUDENT_FAILURE,
  payload: error,
});

const updateStudent = (id, student) => async (dispatch) => {
  dispatch(updateStudentRequest());
  try {
    const { data } = await api.updateStudent(id, student);
    dispatch(updateStudentSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(updateStudentFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchStudents());
  }
};

export default updateStudent;
