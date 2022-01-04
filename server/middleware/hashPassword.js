import bcrypt from 'bcrypt';

const hashPassword = async (password) => await bcrypt.hash(password, 10);

export default hashPassword;
