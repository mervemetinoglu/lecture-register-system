export default (sequelize, Sequelize) => {
  const LectureRegisterModel = sequelize.define(
    'lecture_register',
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

    },
    {updatedAt: false, createdAt: false}
  );

  return LectureRegisterModel;
};
