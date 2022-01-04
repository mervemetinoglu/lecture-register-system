import axios from 'axios';

const URL = `${process.env.REACT_APP_BASE_URL}/auth`;

export const signup = async (userData) => axios.post(`${URL}/signup`, userData);

export const login = async (userData) => axios.post(`${URL}/login`, userData);
