import fetch from 'isomorphic-fetch';
import FetchUtil from '../../utils/FetchUtil';

export const FETCHED_TUTORIALS = 'FETCHED_TUTORIALS';

export function fetchTutorialsByCategoryId(category_id) {
  return dispatch => {
    return fetch(`/rest/service/v1/category/${category_id}`)
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(tutorials => {
        return dispatch({
          type: FETCHED_TUTORIALS,
          data: tutorials,
        });
      });
  };
}
