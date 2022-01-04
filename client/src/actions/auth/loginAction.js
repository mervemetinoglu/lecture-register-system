import * as api from '../../services/auth';
import * as type from '../../constants/auth/loginTypes';
import ROLE from '../../constants/auth/roles';
import { displayErrorMessage } from '../../helpers/displayToastMessages';

const loginRequest = () => ({
  type: type.LOGIN_REQUEST,
});

const loginSuccess = (userData) => ({
  type: type.LOGIN_SUCCESS,
  payload: userData,
});

const loginFailure = (error) => ({
  type: type.LOGIN_FAILURE,
  payload: error,
});

const login = (userData, callback) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await api.login(userData);
    dispatch(loginSuccess(data));
    if (data.data.role === ROLE.Expert) {
      callback(ROLE.Expert);
    } else {
      callback(ROLE.Student);
    }
  } catch (error) {
    dispatch(loginFailure(error));
    displayErrorMessage('Giriş Başarısız!');
  }
};

export default login;
