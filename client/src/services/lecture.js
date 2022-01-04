import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/lecture`;

export const fetchLectures = async () => axios.get(URL);

export const createLecture = async (newLecture) =>
  axios.post(`${URL}/create`, newLecture);

export const updateLecture = async (id, updatedLecture) =>
  axios.patch(`${URL}/update/${id}`, updatedLecture);

export const deleteLecture = async (id) => axios.delete(`${URL}/delete/${id}`);
