import statusReducer from './status/statusReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  status: statusReducer,
});
