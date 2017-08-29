import {GET_CATEGORIES_FAILURE, GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS} from '../actions/index';

const initialState = {
  data: [],
  error: false,
  isFetching: false
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        data: [],
        error: action.error,
        isFetching: false
      };
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        data: [],
        error: false,
        isFetching: true
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.categories,
        error: false,
        isFetching: false
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
