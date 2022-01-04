import * as api from '../../services/classroom';
import * as type from '../../constants/classroom/deleteClassroomTypes';
import fetchClassrooms from './fetchClassroomsActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const deleteClassroomRequest = () => ({
  type: type.DELETE_CLASSROOM_REQUEST,
});

const deleteClassroomSuccess = () => ({
  type: type.DELETE_CLASSROOM_SUCCESS,
});

const deleteClassroomFailure = (error) => ({
  type: type.DELETE_CLASSROOM_FAILURE,
  payload: error,
});

const deleteClassroom = (id) => async (dispatch) => {
  dispatch(deleteClassroomRequest());
  try {
    await api.deleteClassroom(id);
    dispatch(deleteClassroomSuccess());
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(deleteClassroomFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchClassrooms());
  }
};

export default deleteClassroom;
