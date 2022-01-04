import * as type from '../../constants/student/fetchStudentsTypes';

const initialState = {
  students: [],
  isFetching: false,
  isError: false,
};

const fetchStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_STUDENTS_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.GET_STUDENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchStudentsReducer;
