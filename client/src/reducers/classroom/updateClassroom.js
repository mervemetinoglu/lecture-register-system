import * as type from '../../constants/classroom/updateClassroomTypes';

const initialState = {
  updatedClassroom: null,
  isFetching: false,
  isError: false,
};

const updateClassroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_CLASSROOM_REQUEST:
      return {
        ...state,
        updatedClassroom: null,
        isFetching: true,
        isError: false,
      };
    case type.UPDATE_CLASSROOM_SUCCESS:
      return {
        ...state,
        updatedClassroom: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.UPDATE_CLASSROOM_FAILURE:
      return {
        ...state,
        updatedClassroom: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default updateClassroomReducer;
