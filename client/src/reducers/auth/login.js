import * as type from '../../constants/auth/loginTypes';

const initialState = {
  user: {},
  userIsFetching: false,
  userIsError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_REQUEST:
      return { ...state, userIsFetching: true, userIsError: false };
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userIsFetching: false,
        userIsError: false,
      };
    case type.LOGIN_FAILURE:
      return {
        ...state,
        userIsFetching: false,
        userIsError: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
