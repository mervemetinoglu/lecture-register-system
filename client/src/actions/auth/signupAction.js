import * as api from '../../services/auth';
import * as type from '../../constants/auth/signupTypes';

const signupRequest = () => ({
  type: type.SIGNUP_REQUEST,
});

const signupSuccess = (userData) => ({
  type: type.SIGNUP_SUCCESS,
  payload: userData,
});

const signupFailure = (error) => ({
  type: type.SIGNUP_FAILURE,
  payload: error,
});

const signup = (userData) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const { data } = await api.signup(userData);
    dispatch(signupSuccess(data));
  } catch (error) {
    dispatch(signupFailure(error));
  }
};

export default signup;
