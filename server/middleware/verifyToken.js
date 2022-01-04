import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

const verifyToken = (req, res, next) => {
  const authHeader =
    req.body.token || req.query.token || req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return Boom.forbidden('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
  } catch (error) {
    return Boom.unauthorized('Invalid token.');
  }
  return next();
};

export default verifyToken;
