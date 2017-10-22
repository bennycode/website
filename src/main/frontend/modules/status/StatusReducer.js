import {FETCHED_VERSION} from './StatusActionCreators';

export const initialState = {
  version: '0.0.0',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHED_VERSION:
      return {
        ...state,
        version: action.data,
      };
    default:
      return state;
  }
}
