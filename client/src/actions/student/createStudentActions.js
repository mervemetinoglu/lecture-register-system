import * as api from '../../services/student';
import * as type from '../../constants/student/createStudentTypes';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const createStudentRequest = () => ({
  type: type.CREATE_STUDENT_REQUEST,
});

const createStudentSuccess = (createdLecture) => ({
  type: type.CREATE_STUDENT_SUCCESS,
  payload: createdLecture,
});

const createStudentFailure = (error) => ({
  type: type.CREATE_STUDENT_FAILURE,
  payload: error,
});

const createStudent = (student) => async (dispatch) => {
  dispatch(createStudentRequest());
  try {
    const { data } = await api.createStudent(student);
    dispatch(createStudentSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(createStudentFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default createStudent;
