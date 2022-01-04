import * as api from '../../services/lecture';
import * as type from '../../constants/lecture/deleteLectureTypes';
import fetchLectures from './fetchLecturesActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const deleteLectureRequest = () => ({
  type: type.DELETE_LECTURE_REQUEST,
});

const deleteLectureSuccess = () => ({
  type: type.DELETE_LECTURE_SUCCESS,
});

const deleteLectureFailure = (error) => ({
  type: type.DELETE_LECTURE_FAILURE,
  payload: error,
});

const deleteLecture = (id) => async (dispatch) => {
  dispatch(deleteLectureRequest());
  try {
    await api.deleteLecture(id);
    dispatch(deleteLectureSuccess());
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(deleteLectureFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchLectures());
  }
};

export default deleteLecture;
