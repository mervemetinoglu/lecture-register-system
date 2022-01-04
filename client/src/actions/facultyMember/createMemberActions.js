import * as api from '../../services/facultyMember';
import * as type from '../../constants/facultyMember/createMemberTypes';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const createMemberRequest = () => ({
  type: type.CREATE_MEMBER_REQUEST,
});

const createMemberSuccess = (createdMember) => ({
  type: type.CREATE_MEMBER_SUCCESS,
  payload: createdMember,
});

const createMemberFailure = (error) => ({
  type: type.CREATE_MEMBER_FAILURE,
  payload: error,
});

const createMember = (member) => async (dispatch) => {
  dispatch(createMemberRequest());
  try {
    const { data } = await api.createFacultyMember(member);
    dispatch(createMemberSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(createMemberFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default createMember;
