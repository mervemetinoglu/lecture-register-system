export default (sequelize, Sequelize) => {
  const StudentModel = sequelize.define(
    'student',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
    },
    {updatedAt: false, createdAt: false}
  );

  return StudentModel;
};
