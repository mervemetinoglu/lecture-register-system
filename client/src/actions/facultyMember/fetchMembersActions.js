import * as api from '../../services/facultyMember';
import * as type from '../../constants/facultyMember/fetchMembersTypes';
import { displayErrorMessage } from '../../helpers/displayToastMessages';

const fetchMembersRequest = () => ({
  type: type.GET_MEMBERS_REQUEST,
});

const fetchMembersSuccess = (members) => ({
  type: type.GET_MEMBERS_SUCCESS,
  payload: members,
});

const fetchMembersFailure = (error) => ({
  type: type.GET_MEMBERS_FAILURE,
  payload: error,
});

const fetchMembers = () => async (dispatch) => {
  dispatch(fetchMembersRequest());
  try {
    const { data } = await api.fetchFacultyMembers();
    dispatch(fetchMembersSuccess(data));
  } catch (error) {
    dispatch(fetchMembersFailure(error));
    displayErrorMessage('İşlem gerçekleştirilemedi.');
  }
};

export default fetchMembers;
