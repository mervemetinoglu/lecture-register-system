import * as api from '../../services/lectureRegister';
import * as type from '../../constants/lectureRegister/fetchLectureRegisterTypes';

const fetchLectureRegisterRequest = () => ({
  type: type.FETCH_LECTURE_REGISTER_REQUEST,
});

const fetchLectureRegisterSuccess = (lectureRegister) => ({
  type: type.FETCH_LECTURE_REGISTER_SUCCESS,
  payload: lectureRegister,
});

const fetchLectureRegisterFailure = (error) => ({
  type: type.FETCH_LECTURE_REGISTER_FAILURE,
  payload: error,
});

const fetchLectureRegister = (id) => async (dispatch) => {
  dispatch(fetchLectureRegisterRequest());
  try {
    const { data } = await api.fetchLectureRegister(id);
    dispatch(fetchLectureRegisterSuccess(data));
  } catch (error) {
    dispatch(fetchLectureRegisterFailure(error));
  }
};

export default fetchLectureRegister;
