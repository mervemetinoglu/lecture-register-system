import { combineReducers } from 'redux';
import createClassroomReducer from './classroom/createClassroom';
import deleteClassroomReducer from './classroom/deleteClassroom';
import fetchClassroomsReducer from './classroom/fetchClassrooms';
import updateClassroomReducer from './classroom/updateClassroom';
import createFacultyMemberReducer from './facultyMember/createFacultyMember';
import deleteFacultyMemberReducer from './facultyMember/deleteFacultyMember';
import fetchFacultyMembersReducer from './facultyMember/fetchFacultyMembers';
import updateFacultyMemberReducer from './facultyMember/updateFacultyMember';
import createLectureReducer from './lecture/createLecture';
import deleteLectureReducer from './lecture/deleteLecture';
import fetchLecturesReducer from './lecture/fetchLectures';
import updateLectureReducer from './lecture/updateLecture';
import createStudentReducer from './student/createStudent';
import deleteStudentReducer from './student/deleteStudent';
import fetchStudentsReducer from './student/fetchStudents';
import updateStudentReducer from './student/updateStudent';
import loginReducer from './auth/login';
import signupReducer from './auth/signup';
import createLectureRegisterReducer from './lectureRegister/createLectureRegister';
import fetchLectureRegisterReducer from './lectureRegister/fetchLectureRegister';

const rootReducer = combineReducers({
  createdClassroom: createClassroomReducer,
  deleteClassroom: deleteClassroomReducer,
  classrooms: fetchClassroomsReducer,
  updatedClassroom: updateClassroomReducer,
  createdMember: createFacultyMemberReducer,
  deleteMember: deleteFacultyMemberReducer,
  members: fetchFacultyMembersReducer,
  updatedMember: updateFacultyMemberReducer,
  createdLecture: createLectureReducer,
  deleteLecture: deleteLectureReducer,
  lectures: fetchLecturesReducer,
  updatedLecture: updateLectureReducer,
  createdStudent: createStudentReducer,
  deleteStudent: deleteStudentReducer,
  students: fetchStudentsReducer,
  updatedStudent: updateStudentReducer,
  user: loginReducer,
  signup: signupReducer,
  register: createLectureRegisterReducer,
  fetchRegisters: fetchLectureRegisterReducer,
});

export default rootReducer;
