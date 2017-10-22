import {FETCHED_TUTORIALS} from './TutorialActionCreators';

export const initialState = {
  tutorials: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHED_TUTORIALS:
      return {
        ...state,
        tutorials: [...action.data],
      };
    default:
      return state;
  }
}
