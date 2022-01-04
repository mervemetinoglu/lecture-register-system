import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/lecture-register`;

export const fetchLectureRegister = async (id) => axios.post(URL, { id });

export const createLectureRegister = async (newLectureRegister) =>
  axios.post(`${URL}/create`, newLectureRegister);
