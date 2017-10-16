import fetch from 'isomorphic-fetch';
import FetchUtil from '../../utils/FetchUtil';

export const FETCHED_VERSION = 'FETCHED_VERSION';

export function fetchVersion() {
  return dispatch => {
    return fetch('/status?info=version')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(status => {
        const {version} = status;
        return dispatch({
          type: FETCHED_VERSION,
          data: version,
        });
      });
  };
}
