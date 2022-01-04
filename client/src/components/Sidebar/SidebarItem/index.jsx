import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ pathName, itemName }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const checkClickedOutside = (event) => {
      if (isActive && ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', checkClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkClickedOutside);
    };
  }, [isActive]);

  return (
    <li className="sidebar__item" onClick={toggle} ref={ref} aria-hidden="true">
      {itemName}
      {isActive && (
        <ul>
          <li>
            <Link to={`/expert/dashboard/${pathName}`}>Listele</Link>
          </li>
          <li>
            <Link to={`/expert/dashboard/${pathName}-add`}>Ekle</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
