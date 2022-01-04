import * as api from '../../services/lecture';
import * as type from '../../constants/lecture/updateLectureTypes';
import fetchLectures from './fetchLecturesActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const updateLectureRequest = () => ({
  type: type.UPDATE_LECTURE_REQUEST,
});

const updateLectureSuccess = (updatedLecture) => ({
  type: type.UPDATE_LECTURE_SUCCESS,
  payload: updatedLecture,
});

const updateLectureFailure = (error) => ({
  type: type.UPDATE_LECTURE_FAILURE,
  payload: error,
});

const updateLecture = (id, lecture) => async (dispatch) => {
  dispatch(updateLectureRequest());
  try {
    const { data } = await api.updateLecture(id, lecture);
    dispatch(updateLectureSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(updateLectureFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchLectures());
  }
};

export default updateLecture;
