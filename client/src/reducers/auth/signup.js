import * as type from '../../constants/auth/signupTypes';

const initialState = {
  user: {},
  isFetching: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SIGNUP_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
