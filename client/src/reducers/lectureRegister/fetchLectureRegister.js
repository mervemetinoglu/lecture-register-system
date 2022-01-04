import * as type from '../../constants/lectureRegister/fetchLectureRegisterTypes';

const initialState = {
  lectureRegisters: [],
  isFetching: false,
  isError: false,
};

const fetchLectureRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_LECTURE_REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
      };
    case type.FETCH_LECTURE_REGISTER_SUCCESS:
      return {
        ...state,
        lectureRegisters: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.FETCH_LECTURE_REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchLectureRegisterReducer;
