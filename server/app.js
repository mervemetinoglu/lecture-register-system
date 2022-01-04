import express from 'express';
import dotenv from 'dotenv';
import Boom from '@hapi/boom';
import bodyParser from 'body-parser';
import cors from 'cors';
import lectureRoutes from './routes/lectureRouter.js';
import classroomRoutes from './routes/classroomRouter.js';
import studentRoutes from './routes/studentRouter.js';
import facultyMemberRoutes from './routes/facultyMemberRouter.js';
import authRoutes from './routes/authRouter.js';
import lectureRegisterRoutes from './routes/lectureRegisterRouter.js';
import db from './models/index.js';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

db.sequelize.sync();

app.use('/api/v1/lecture', lectureRoutes);
app.use('/api/v1/classroom', classroomRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/faculty-member', facultyMemberRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/lecture-register', lectureRegisterRoutes);

app.use((req, res, next) => {
  return next(Boom.notFound('This route does not exist.'));
});

app.use((err, req, res, next) => {
  console.log(err);

  if (err) {
    if (err.output) {
      return res.status(err.output.statusCode || 500).json(err.output.payload);
    }

    return res.status(500).json(err);
  }
});

export default app;
