import rootReducer from './modules/rootReducer';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {};

const composeEnhancers = () => {
  const middlewares = [thunk];
  const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  return composeEnhancers(applyMiddleware(...middlewares));
};

const store = createStore(rootReducer, initialState, composeEnhancers());

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./modules/rootReducer.js', () => {
      store.replaceReducer(require('./modules/rootReducer').default);
    });
  }
}

export default store;
