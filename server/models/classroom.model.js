export default (sequelize, Sequelize) => {
  const ClassroomModel = sequelize.define(
    'classroom',
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
      parentCode: {type: Sequelize.STRING},
      type: {type: Sequelize.STRING},
    },
    {updatedAt: false, createdAt: false}
  );
  return ClassroomModel;
};
