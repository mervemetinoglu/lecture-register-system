import * as api from '../../services/classroom';
import * as type from '../../constants/classroom/updateClassroomTypes';
import fetchClassrooms from './fetchClassroomsActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const updateClassroomRequest = () => ({
  type: type.UPDATE_CLASSROOM_REQUEST,
});

const updateClassroomSuccess = (updatedClassroom) => ({
  type: type.UPDATE_CLASSROOM_SUCCESS,
  payload: updatedClassroom,
});

const updateClassroomFailure = (error) => ({
  type: type.UPDATE_CLASSROOM_FAILURE,
  payload: error,
});

const updateClassroom = (id, classroom) => async (dispatch) => {
  dispatch(updateClassroomRequest());
  try {
    const { data } = await api.updateClassroom(id, classroom);
    dispatch(updateClassroomSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(updateClassroomFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchClassrooms());
  }
};

export default updateClassroom;
