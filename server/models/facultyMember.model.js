export default (sequelize, Sequelize) => {
  const FacultyMemberModel = sequelize.define(
    'faculty_member',
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
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      startDate: {
        type: Sequelize.STRING,
      },
    },
    {updatedAt: false, createdAt: false}
  );

  return FacultyMemberModel;
};
