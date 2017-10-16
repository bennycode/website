import App from './components/App.jsx';
import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
);
