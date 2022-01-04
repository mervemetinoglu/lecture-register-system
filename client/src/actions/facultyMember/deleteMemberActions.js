import * as api from '../../services/facultyMember';
import * as type from '../../constants/facultyMember/deleteMemberTypes';
import fetchMembers from './fetchMembersActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const deleteMemberRequest = () => ({
  type: type.DELETE_MEMBER_REQUEST,
});

const deleteMemberSuccess = () => ({
  type: type.DELETE_MEMBER_SUCCESS,
});

const deleteMemberFailure = (error) => ({
  type: type.DELETE_MEMBER_FAILURE,
  payload: error,
});

const deleteMember = (id) => async (dispatch) => {
  dispatch(deleteMemberRequest());
  try {
    await api.deleteFacultyMember(id);
    dispatch(deleteMemberSuccess());
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(deleteMemberFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchMembers());
  }
};

export default deleteMember;
