import * as type from '../../constants/classroom/deleteClassroomTypes';

const initialState = {
  isFetching: false,
  isError: false,
};

const deleteClassroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_CLASSROOM_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.DELETE_CLASSROOM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case type.DELETE_CLASSROOM_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default deleteClassroomReducer;
