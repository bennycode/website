import {FETCHED_CATEGORIES} from './categoriesActionCreators';

export const initialState = {
  fetching: false,
  fetched: false,
  categories: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHED_CATEGORIES:
      return {
        ...state,
        categories: [...action.data],
      };
    default:
      return state;
  }
}
