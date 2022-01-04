import * as api from '../../services/lecture';
import * as type from '../../constants/lecture/createLectureTypes';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const createLectureRequest = () => ({
  type: type.CREATE_LECTURE_REQUEST,
});

const createLectureSuccess = (createdLecture) => ({
  type: type.CREATE_LECTURE_SUCCESS,
  payload: createdLecture,
});

const createLectureFailure = (error) => ({
  type: type.CREATE_LECTURE_FAILURE,
  payload: error,
});

const createLecture = (lecture) => async (dispatch) => {
  dispatch(createLectureRequest());
  try {
    const { data } = await api.createLecture(lecture);
    dispatch(createLectureSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(createLectureFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default createLecture;
