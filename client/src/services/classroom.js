import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/classroom`;

export const fetchClassrooms = async () => axios.get(URL);

export const createClassroom = async (newClassroom) =>
  axios.post(`${URL}/create`, newClassroom);

export const updateClassroom = async (id, updatedClassroom) =>
  axios.patch(`${URL}/update/${id}`, updatedClassroom);

export const deleteClassroom = async (id) =>
  axios.delete(`${URL}/delete/${id}`);
