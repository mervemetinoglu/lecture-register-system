import * as type from '../../constants/facultyMember/deleteMemberTypes';

const initialState = {
  isFetching: false,
  isError: false,
};

const deleteFacultyMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_MEMBER_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case type.DELETE_MEMBER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default deleteFacultyMemberReducer;
