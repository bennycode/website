import rootReducer from './modules/';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';

const initialState = {};
const enhancers = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
