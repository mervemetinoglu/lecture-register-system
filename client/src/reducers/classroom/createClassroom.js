import * as type from '../../constants/classroom/createClassroomTypes';

const initialState = {
  classroom: null,
  isFetching: false,
  isError: false,
};

const createClassroomReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_CLASSROOM_REQUEST:
      return { ...state, classroom: null, isFetching: true, isError: false };
    case type.CREATE_CLASSROOM_SUCCESS:
      return {
        ...state,
        classroom: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.CREATE_CLASSROOM_FAILURE:
      return {
        ...state,
        classroom: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default createClassroomReducer;
