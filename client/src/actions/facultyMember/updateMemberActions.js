import * as api from '../../services/facultyMember';
import * as type from '../../constants/facultyMember/updateMemberTypes';
import fetchMembers from './fetchMembersActions';
import {
  displayErrorMessage,
  displaySuccessMessage,
} from '../../helpers/displayToastMessages';

const updateMemberRequest = () => ({
  type: type.UPDATE_MEMBER_REQUEST,
});

const updateMemberSuccess = (updatedMember) => ({
  type: type.UPDATE_MEMBER_SUCCESS,
  payload: updatedMember,
});

const updateMemberFailure = (error) => ({
  type: type.UPDATE_MEMBER_FAILURE,
  payload: error,
});

const updateMember = (id, member) => async (dispatch) => {
  dispatch(updateMemberRequest());
  try {
    const { data } = await api.updateFacultyMember(id, member);
    dispatch(updateMemberSuccess(data));
    displaySuccessMessage('İşlem gerçekleştirildi.');
  } catch (error) {
    dispatch(updateMemberFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  } finally {
    dispatch(fetchMembers());
  }
};

export default updateMember;
