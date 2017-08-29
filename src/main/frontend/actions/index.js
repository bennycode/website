export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

export const getCategoriesPending = () => {
  return {
    type: GET_CATEGORIES_PENDING
  }
};

export function fetchCategories() {
  return (dispatch) => {
    return fetch('/rest/service/v1/categories', {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((data) => {
      return dispatch({
        type: GET_CATEGORIES_SUCCESS,
        categories: data
      });
    }).catch((error) => {
      return dispatch({
        type: GET_CATEGORIES_FAILURE,
        error: error
      });
    });
  }
};

export function getCategories() {
  return (dispatch) => {
    return Promise.all([
      dispatch(fetchCategories()),
    ]);
  };
};
