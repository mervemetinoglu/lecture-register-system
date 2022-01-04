import Sequelize from 'sequelize';
import config from '../config/db.config.js';
import Classroom from './classroom.model.js';
import FacultyMember from './facultyMember.model.js';
import Lecture from './lecture.model.js';
import LectureRegister from './lectureRegister.model.js';
import Student from './student.model.js';
import User from './user.model.js';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.classroom = Classroom(sequelize, Sequelize);
db.facultyMember = FacultyMember(sequelize, Sequelize);
db.lecture = Lecture(sequelize, Sequelize);
db.lectureRegister = LectureRegister(sequelize, Sequelize);
db.student = Student(sequelize, Sequelize);
db.user = User(sequelize, Sequelize);


db.lecture.belongsTo(db.classroom, {foreignKeyConstraint: true});


db.lecture.belongsTo(db.facultyMember, {foreignKeyConstraint: true});

db.lectureRegister.belongsTo(db.lecture, {foreignKeyConstraint: true});


db.lectureRegister.belongsTo(db.student, {foreignKeyConstraint: true});

export default db;
