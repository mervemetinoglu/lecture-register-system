import * as api from '../../services/classroom';
import * as type from '../../constants/classroom/fetchClassroomsTypes';
import { displayErrorMessage } from '../../helpers/displayToastMessages';

const fetchClassroomsRequest = () => ({
  type: type.GET_CLASSROOMS_REQUEST,
});

const fetchClassroomsSuccess = (classrooms) => ({
  type: type.GET_CLASSROOMS_SUCCESS,
  payload: classrooms,
});

const fetchClassroomsFailure = (error) => ({
  type: type.GET_CLASSROOMS_FAILURE,
  payload: error,
});

const fetchClassrooms = () => async (dispatch) => {
  dispatch(fetchClassroomsRequest());
  try {
    const { data } = await api.fetchClassrooms();
    dispatch(fetchClassroomsSuccess(data));
  } catch (error) {
    dispatch(fetchClassroomsFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default fetchClassrooms;
