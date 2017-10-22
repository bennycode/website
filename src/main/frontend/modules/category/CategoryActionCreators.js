import fetch from 'isomorphic-fetch';
import FetchUtil from '../../utils/FetchUtil';

export const FETCHED_CATEGORIES = 'FETCHED_CATEGORIES';

export function fetchCategories() {
  return dispatch => {
    return fetch('/rest/service/v1/category')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(categories =>
        dispatch({
          type: FETCHED_CATEGORIES,
          data: categories,
        })
      );
  };
}
