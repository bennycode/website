import App from './components/App.jsx';
import React from 'react';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
const target = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);
