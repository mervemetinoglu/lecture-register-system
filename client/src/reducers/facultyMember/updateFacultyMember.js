import * as type from '../../constants/facultyMember/updateMemberTypes';

const initialState = {
  updatedFacultyMember: null,
  isFetching: false,
  isError: false,
};

const updateFacultyMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        updatedFacultyMember: null,
        isFetching: true,
        isError: false,
      };
    case type.UPDATE_MEMBER_SUCCESS:
      return {
        ...state,
        updatedFacultyMember: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        updatedFacultyMember: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default updateFacultyMemberReducer;
