import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LecturePage from './pages/LecturePage';
import AddLecturePage from './pages/AddLecturePage';
import StudentPage from './pages/StudentPage';
import AddStudentPage from './pages/AddStudentPage';
import AddClassroomPage from './pages/AddClassroomPage';
import AddFacultyMemberPage from './pages/AddFacultyMemberPage';
import FacultyMemberPage from './pages/FacultyMemberPage';
import ClassroomPage from './pages/ClassroomPage';
import ROLE from './constants/auth/roles';
import ProtectedRoute from './routes/ProtectedRoute';
import App from './App';
import LoginPage from './pages/LoginPage';
import LectureRegisterPage from './pages/LectureRegisterPage';
import NotFound from './pages/NotFound';
import Spinner from './components/Spinner';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/expert/"
              element={<ProtectedRoute roles={[ROLE.Expert]} />}
            >
              <Route path="dashboard" element={<App />}>
                <Route path="lecture" element={<LecturePage />} />
                <Route path="lecture-add" element={<AddLecturePage />} />
                <Route path="lecture-edit/:id" element={<AddLecturePage />} />
                <Route path="student" element={<StudentPage />} />
                <Route path="student-add" element={<AddStudentPage />} />
                <Route path="student-edit/:id" element={<AddStudentPage />} />
                <Route path="faculty-member" element={<FacultyMemberPage />} />
                <Route
                  path="faculty-member-add"
                  element={<AddFacultyMemberPage />}
                />
                <Route
                  path="faculty-member-edit/:id"
                  element={<AddFacultyMemberPage />}
                />
                <Route path="classroom" element={<ClassroomPage />} />
                <Route path="classroom-add" element={<AddClassroomPage />} />
                <Route
                  path="classroom-edit/:id"
                  element={<AddClassroomPage />}
                />
              </Route>
            </Route>
            <Route
              path="/student/"
              element={<ProtectedRoute roles={[ROLE.Student]} />}
            >
              <Route path="dashboard" element={<LectureRegisterPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            hideProgressBar
            newestOnTop
            closeOnClick
            draggable
            pauseOnHover
          />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
