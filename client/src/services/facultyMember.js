import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/faculty-member`;

export const fetchFacultyMembers = async () => axios.get(URL);

export const createFacultyMember = async (newFacultyMember) =>
  axios.post(`${URL}/create`, newFacultyMember);

export const updateFacultyMember = async (id, updatedFacultyMember) =>
  axios.patch(`${URL}/update/${id}`, updatedFacultyMember);

export const deleteFacultyMember = async (id) =>
  axios.delete(`${URL}/delete/${id}`);
