import Joi from 'joi';

const ValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().required(),
});

export default ValidationSchema;
