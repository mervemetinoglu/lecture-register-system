import Boom from '@hapi/boom';
import db from '../../models/index.js';

const Lecture = db.lecture;

export const getLectures = async (req, res, next) => {
  try {
    const lectures = await Lecture.findAll();
    res.status(200).json(lectures);
  } catch (error) {
    next(Boom.notFound(error.message));
  }
};

export const createLecture = async (req, res, next) => {
  const lecture = req.body;

  Lecture.create(lecture)
    .then((data) => res.status(201).json(data))
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const updateLecture = async (req, res, next) => {
  const {id} = req.params;
  const lecture = req.body;
  Lecture.update(lecture, {
    where: {id: id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Lecture was updated successfully.'});
      } else {
        res.send({
          message: `Can not update lecture with id=${id}. Lecture was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const deleteLecture = async (req, res, next) => {
  const {id} = req.params;

  Lecture.destroy({
    where: {id: id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Lecture was deleted successfully.'});
      } else {
        res.send({
          message: `Can not delete lecture with id=${id}. Lecture was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};
