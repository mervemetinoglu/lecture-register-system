import * as type from '../../constants/student/createStudentTypes';

const initialState = {
  student: null,
  isFetching: false,
  isError: false,
};

const createStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_STUDENT_REQUEST:
      return { ...state, student: null, isFetching: true, isError: false };
    case type.CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.CREATE_STUDENT_FAILURE:
      return {
        ...state,
        student: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default createStudentReducer;
