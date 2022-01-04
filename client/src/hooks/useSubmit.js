import { useDispatch } from 'react-redux';

const useSubmit = (callbacks, id, values) => {
  const dispatch = useDispatch();
  const [createAction, updateAction] = callbacks;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(updateAction(id, values));
    } else {
      dispatch(createAction(values));
    }
  };

  return handleSubmit;
};

export default useSubmit;
