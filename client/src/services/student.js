import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/student`;

export const fetchStudents = async () => axios.get(URL);

export const createStudent = async (newStudent) =>
  axios.post(`${URL}/create`, newStudent);

export const updateStudent = async (id, updatedStudent) =>
  axios.patch(`${URL}/update/${id}`, updatedStudent);

export const deleteStudent = async (id) => axios.delete(`${URL}/delete/${id}`);
