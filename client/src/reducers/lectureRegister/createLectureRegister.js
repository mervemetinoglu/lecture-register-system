import * as type from '../../constants/lectureRegister/ceateLectureRegisterTypes';

const initialState = {
  lectureRegister: null,
  isFetching: false,
  isError: false,
};

const createLectureRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_LECTURE_REGISTER_REQUEST:
      return {
        ...state,
        lectureRegister: null,
        isFetching: true,
        isError: false,
      };
    case type.CREATE_LECTURE_REGISTER_SUCCESS:
      return {
        ...state,
        lectureRegister: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.CREATE_LECTURE_REGISTER_FAILURE:
      return {
        ...state,
        lectureRegister: null,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default createLectureRegisterReducer;
