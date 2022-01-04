import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => (
  <div className="app__container">
    <Sidebar />
    <Outlet />
  </div>
);

export default App;
