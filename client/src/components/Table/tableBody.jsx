import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

const TableBody = ({ data, callback }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = (id) => {
    dispatch(callback(id));
  };

  const handleUpdate = (id) => {
    navigate(`${location.pathname}-edit/${id}`, { replace: true });
  };

  return (
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          {Object.entries(value).map((val, idx) => {
            if (val[0] !== 'id') return <td key={idx}>{val[1]}</td>;
            return null;
          })}
          <td>
            <button
              className="update__btn"
              onClick={() => handleUpdate(value.id)}
              type="button"
            >
              Güncelle
            </button>
          </td>
          <td>
            <button
              className="delete__btn"
              onClick={() => handleDelete(value.id)}
              type="button"
            >
              Sil
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
