import * as type from '../../constants/lecture/fetchLecturesTypes';

const initialState = {
  lectures: [],
  isFetching: false,
  isError: false,
};

const fetchLecturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LECTURES_REQUEST:
      return { ...state, isFetching: true, isError: false };
    case type.GET_LECTURES_SUCCESS:
      return {
        ...state,
        lectures: action.payload,
        isFetching: false,
        isError: false,
      };
    case type.GET_LECTURES_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default fetchLecturesReducer;
