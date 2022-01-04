import bcrypt from 'bcrypt';

const validatePassword = (plainPassword, hashedPassword) =>
  bcrypt.compare(plainPassword, hashedPassword);

export default validatePassword;
