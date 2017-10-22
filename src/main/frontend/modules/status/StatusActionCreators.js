import fetch from 'isomorphic-fetch';
import FetchUtil from '../../utils/FetchUtil';

export const FETCHED_VERSION = 'FETCHED_VERSION';

export function fetchVersion() {
  return dispatch => {
    return fetch('/status?info=version')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(status =>
        dispatch({
          type: FETCHED_VERSION,
          data: status.version,
        })
      );
  };
}
