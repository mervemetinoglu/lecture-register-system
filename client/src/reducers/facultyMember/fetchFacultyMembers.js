import * as type from '../../constants/facultyMember/fetchMembersTypes';

const initialState = {
  facultyMembers: [],
  isFetching: false,
  isError: false,
};

const fetchFacultyMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_MEMBERS_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.GET_MEMBERS_SUCCESS:
      return {
        ...state,
        facultyMembers: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.GET_MEMBERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchFacultyMembersReducer;
