import * as type from '../../constants/facultyMember/createMemberTypes';

const initialState = {
  facultyMember: null,
  isFetching: false,
  isError: false,
};

const createFacultyMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_MEMBER_REQUEST:
      return {
        ...state,
        facultyMember: null,
        isFetching: true,
        isError: false,
      };
    case type.CREATE_MEMBER_SUCCESS:
      return {
        ...state,
        facultyMember: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.CREATE_MEMBER_FAILURE:
      return {
        ...state,
        facultyMember: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default createFacultyMemberReducer;
