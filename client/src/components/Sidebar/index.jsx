import './sidebar.scss';
import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      <SidebarItem pathName="lecture" itemName="Dersler" />
      <SidebarItem pathName="student" itemName="Öğrenciler" />
      <SidebarItem pathName="faculty-member" itemName="Öğretim Görevlileri" />
      <SidebarItem pathName="classroom" itemName="Kat/Sınıf" />
    </ul>
  </nav>
);

export default Sidebar;
