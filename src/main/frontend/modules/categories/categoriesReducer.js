import {FETCHED_CATEGORIES} from './categoriesActionCreators';

export const categories = [];

export default function categoriesReducer(state = categories, action) {
  switch (action.type) {
    case FETCHED_CATEGORIES:
      return action.data;
    default:
      return state;
  }
}
