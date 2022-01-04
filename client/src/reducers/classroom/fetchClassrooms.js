import * as type from '../../constants/classroom/fetchClassroomsTypes';

const initialState = {
  classrooms: [],
  isFetching: false,
  isError: false,
};

const fetchClassroomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CLASSROOMS_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.GET_CLASSROOMS_SUCCESS:
      return {
        ...state,
        classrooms: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.GET_CLASSROOMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchClassroomsReducer;
