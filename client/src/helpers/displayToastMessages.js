import { toast } from 'react-toastify';

export const displayErrorMessage = (message) => {
  toast.error(message, {
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    closeButton: false,
  });
};

export const displaySuccessMessage = (message) => {
  toast.success(message, {
    position: 'top-right',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    closeButton: false,
  });
};
