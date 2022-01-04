import * as type from '../../constants/student/deleteStudentTypes';

const initialState = {
  isFetching: false,
  isError: false,
};

const deleteStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_STUDENT_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case type.DELETE_STUDENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default deleteStudentReducer;
