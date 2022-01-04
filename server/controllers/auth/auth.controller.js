import Boom from '@hapi/boom';
import hashPassword from '../../middleware/hashPassword.js';
import validatePassword from '../../middleware/validatePassword.js';
import signAccessToken from '../../middleware/signAccessToken.js';
import ValidationSchema from './validations.js';
import db from '../../models/index.js';

const User = db.user;

export const signup = async (req, res, next) => {
  try {
    const input = req.body;
    const {error} = ValidationSchema.validate(input);

    if (error) {
      return next(Boom.badRequest(error.details[0].message));
    }

    const oldUser = await User.findOne({where: {email: input.email}});

    if (oldUser) {
      return next(Boom.conflict('User Already Exist. Please Login'));
    }

    const hashedPassword = await hashPassword(input.password);

    const newUser = {
      email: input.email.toLowerCase(),
      password: hashedPassword,
      role: input.role || 'expert',
    };

    const createdUser = await User.create(newUser);

    res.status(201).json({
      data: createdUser,
    });
  } catch (error) {
    next(Boom.conflict(error.message));
  }
};

export const login = async (req, res, next) => {
  try {
    const input = req.body;

    const user = await User.findOne({where: {email: input.email}});

    if (!user) return next(Boom.notFound('User does not exist'));

    const validPassword = await validatePassword(input.password, user.password);

    if (!validPassword)
      return next(Boom.unauthorized('Password is not correct'));

    const accessToken = await signAccessToken({
      id: user.id,
      role: user.role,
    });

    user.accessToken = accessToken;

    res.status(200).json({
      data: user,
      accessToken,
    });
  } catch (error) {
    next(Boom.conflict(error.message));
  }
};

export const getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    data: users,
  });
};
