import CategoryReducer from './category/CategoryReducer';
import StatusReducer from './status/StatusReducer';
import TutorialReducer from './tutorial/TutorialReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  categoryState: CategoryReducer,
  statusState: StatusReducer,
  tutorialState: TutorialReducer,
});
