import rootReducer from './modules/rootReducer';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';

const initialState = {};

const composeEnhancers = () => {
  const enhancers = [];
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return compose(applyMiddleware(...middlewares), ...enhancers);
};

const store = createStore(rootReducer, initialState, composeEnhancers());

export default store;
