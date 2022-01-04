import Boom from '@hapi/boom';
import db from '../../models/index.js';

const LectureRegister = db.lectureRegister;

export const getLectureRegister = async (req, res, next) => {
  const {id} = req.body;
  try {
    const lectureRegister = await LectureRegister.findAll({
      where: {
        studentId: id,
      },
    });
    res.status(200).json(lectureRegister);
  } catch (error) {
    next(Boom.notFound(error.message));
  }
};

export const createLectureRegister = async (req, res, next) => {
  const lectureRegister = req.body;

  LectureRegister.create(lectureRegister)
    .then((data) => res.status(201).json(data))
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};
