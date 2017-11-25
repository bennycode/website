import CategoryReducer from './category/CategoryReducer';
import {combineReducers} from 'redux';
import StatusReducer from './status/StatusReducer';
import TutorialReducer from './tutorial/TutorialReducer';

export default combineReducers({
  categoryState: CategoryReducer,
  statusState: StatusReducer,
  tutorialState: TutorialReducer,
});
