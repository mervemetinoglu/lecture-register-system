import React from 'react';
import './container.scss';

const Container = ({ children }) => (
  <div className="container__wrapper">
    <div className="container">{children}</div>
  </div>
);

export default Container;
