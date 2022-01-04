export default (sequelize, Sequelize) => {
  const LectureModel = sequelize.define(
    'lecture',
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
      isMandatory: {
        type: Sequelize.STRING,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hour: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {updatedAt: false, createdAt: false}
  );

  return LectureModel;
};
