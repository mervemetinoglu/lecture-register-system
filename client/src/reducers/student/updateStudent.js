import * as type from '../../constants/student/updateStudentTypes';

const initialState = {
  updatedStudent: null,
  isFetching: false,
  isError: false,
};

const updateStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        updatedStudent: null,
        isFetching: true,
        isError: false,
      };
    case type.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        updatedStudent: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        updatedStudent: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default updateStudentReducer;
