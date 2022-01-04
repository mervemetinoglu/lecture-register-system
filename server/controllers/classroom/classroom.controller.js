import Boom from '@hapi/boom';
import db from '../../models/index.js';

const Classroom = db.classroom;

export const getClassrooms = async (req, res, next) => {
  try {
    const classrooms = await Classroom.findAll();
    res.status(200).json(classrooms);
  } catch (error) {
    next(Boom.notFound(error.message));
  }
};

export const createClassroom = async (req, res, next) => {
  const classroom = req.body;

  Classroom.create(classroom)
    .then((data) => res.status(201).json(data))
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const updateClassroom = async (req, res, next) => {
  const {id: _id} = req.params;
  const classroom = req.body;

  Classroom.update(classroom, {
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Classroom was updated successfully.'});
      } else {
        res.send({
          message: `Can not update classroom with id=${_id}. Classroom was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const deleteClassroom = async (req, res, next) => {
  const {id: _id} = req.params;

  Classroom.destroy({
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Classroom was deleted successfully.'});
      } else {
        res.send({
          message: `Can not delete classroom with id=${_id}. Classroom was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};
