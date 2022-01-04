import * as api from '../../services/lectureRegister';
import * as type from '../../constants/lecture/createLectureTypes';
import fetchLectureRegister from './fetchLectureRegister';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const createLectureRegisterRequest = () => ({
  type: type.CREATE_LECTURE_REQUEST,
});

const createLectureRegisterSuccess = (createdLectureRegister) => ({
  type: type.CREATE_LECTURE_SUCCESS,
  payload: createdLectureRegister,
});

const createLectureRegisterFailure = (error) => ({
  type: type.CREATE_LECTURE_FAILURE,
  payload: error,
});

const createLectureRegister = (lectureRegister, id) => async (dispatch) => {
  dispatch(createLectureRegisterRequest());
  try {
    const { data } = await api.createLectureRegister(lectureRegister);
    dispatch(createLectureRegisterSuccess(data));
    displaySuccessMessage('Ders ekleme işlemi gerçekleştirildi.');
  } catch (error) {
    dispatch(createLectureRegisterFailure(error));
    displayErrorMessage('Ders ekleme işlemi gerçekleştirilemedi!');
  } finally {
    dispatch(fetchLectureRegister(id));
  }
};

export default createLectureRegister;
