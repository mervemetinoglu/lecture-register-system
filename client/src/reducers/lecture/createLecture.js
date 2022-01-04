import * as type from '../../constants/lecture/createLectureTypes';

const initialState = {
  lecture: null,
  isFetching: false,
  isError: false,
};

const createLectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_LECTURE_REQUEST:
      return { ...state, lecture: null, isFetching: true, isError: false };
    case type.CREATE_LECTURE_SUCCESS:
      return {
        ...state,
        lecture: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.CREATE_LECTURE_FAILURE:
      return {
        ...state,
        lecture: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default createLectureReducer;
