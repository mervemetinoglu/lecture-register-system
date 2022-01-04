import dotenv from 'dotenv';
dotenv.config();

export default {
  HOST: process.env.HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: 'mysql',
};
