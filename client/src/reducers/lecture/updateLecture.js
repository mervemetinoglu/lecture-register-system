import * as type from '../../constants/lecture/updateLectureTypes';

const initialState = {
  updatedLecture: null,
  isFetching: false,
  isError: false,
};

const updateLectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_LECTURE_REQUEST:
      return {
        ...state,
        updatedLecture: null,
        isFetching: true,
        isError: false,
      };
    case type.UPDATE_LECTURE_SUCCESS:
      return {
        ...state,
        updatedLecture: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.UPDATE_LECTURE_FAILURE:
      return {
        ...state,
        updatedLecture: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default updateLectureReducer;
