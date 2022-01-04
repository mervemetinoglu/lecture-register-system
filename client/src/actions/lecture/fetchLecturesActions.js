import * as api from '../../services/lecture';
import * as type from '../../constants/lecture/fetchLecturesTypes';
import { displayErrorMessage } from '../../helpers/displayToastMessages';

const fetchLecturesRequest = () => ({
  type: type.GET_LECTURES_REQUEST,
});

const fetchLecturesSuccess = (lectures) => ({
  type: type.GET_LECTURES_SUCCESS,
  payload: lectures,
});

const fetchLecturesFailure = (error) => ({
  type: type.GET_LECTURES_FAILURE,
  payload: error,
});

const fetchLectures = () => async (dispatch) => {
  dispatch(fetchLecturesRequest());
  try {
    const { data } = await api.fetchLectures();
    dispatch(fetchLecturesSuccess(data));
  } catch (error) {
    dispatch(fetchLecturesFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default fetchLectures;
