import * as api from '../../services/classroom';
import * as type from '../../constants/classroom/createClassroomTypes';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const createClassroomRequest = () => ({
  type: type.CREATE_CLASSROOM_REQUEST,
});

const createClassroomSuccess = (createdClassroom) => ({
  type: type.CREATE_CLASSROOM_SUCCESS,
  payload: createdClassroom,
});

const createClassroomFailure = (error) => ({
  type: type.CREATE_CLASSROOM_FAILURE,
  payload: error,
});

const createClassroom = (classroom) => async (dispatch) => {
  dispatch(createClassroomRequest());
  try {
    const { data } = await api.createClassroom(classroom);
    dispatch(createClassroomSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(createClassroomFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default createClassroom;
