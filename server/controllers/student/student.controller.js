import Boom from '@hapi/boom';
import db from '../../models/index.js';

const Student = db.student;

export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    next(Boom.notFound(error.message));
  }
};

export const createStudent = async (req, res, next) => {
  const student = req.body;

  Student.create(student)
    .then((data) => res.status(201).json(data))
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const updateStudent = async (req, res, next) => {
  const {id: _id} = req.params;
  const student = req.body;

  Student.update(student, {
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Student was updated successfully.'});
      } else {
        res.send({
          message: `Can not update student with id=${_id}. Student was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const deleteStudent = async (req, res, next) => {
  const {id: _id} = req.params;

  Student.destroy({
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Student was deleted successfully.'});
      } else {
        res.send({
          message: `Can not delete student with id=${_id}. Student was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};
