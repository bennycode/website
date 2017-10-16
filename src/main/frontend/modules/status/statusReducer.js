import {FETCHED_VERSION} from './statusActions';

export const status = {
  version: '0.0.0',
};

export default function statusReducer(state = status, action) {
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
