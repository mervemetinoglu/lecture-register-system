import * as type from '../../constants/lecture/deleteLectureTypes';

const initialState = {
  isFetching: false,
  isError: false,
};

const deleteLectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_LECTURE_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.DELETE_LECTURE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
      };
    case type.DELETE_LECTURE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default deleteLectureReducer;
