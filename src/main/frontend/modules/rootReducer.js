import CategoryReducer from './category/CategoryReducer';
import StatusReducer from './status/StatusReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  categoryState: CategoryReducer,
  statusState: StatusReducer,
});
