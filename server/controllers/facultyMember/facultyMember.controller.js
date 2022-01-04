import Boom from '@hapi/boom';
import db from '../../models/index.js';

const FacultyMember = db.facultyMember;

export const getFacultyMembers = async (req, res, next) => {
  try {
    const facultyMembers = await FacultyMember.findAll();
    res.status(200).json(facultyMembers);
  } catch (error) {
    next(Boom.notFound(error.message));
  }
};

export const createFacultyMember = async (req, res, next) => {
  const facultyMember = req.body;

  FacultyMember.create(facultyMember)
    .then((data) => res.status(201).json(data))
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const updateFacultyMember = async (req, res, next) => {
  const {id: _id} = req.params;
  const facultyMember = req.body;

  FacultyMember.update(facultyMember, {
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Faculty member was updated successfully.'});
      } else {
        res.send({
          message: `Can not update faculty member with id=${_id}. Faculty member was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};

export const deleteFacultyMember = async (req, res, next) => {
  const {id: _id} = req.params;

  FacultyMember.destroy({
    where: {id: _id},
  })
    .then((num) => {
      if (num === 1) {
        res.send({message: 'Faculty member was deleted successfully.'});
      } else {
        res.send({
          message: `Can not delete faculty member with id=${_id}. Faculty member was not found.`,
        });
      }
    })
    .catch((error) =>
      next(Boom.conflict(error.message || 'There was a conflict'))
    );
};
