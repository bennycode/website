import App from './components/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import store from './store';

const target = document.getElementById('root');

const renderApp = App => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    target
  );
};

function runApp() {
  renderApp(App);
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(App.default);
    });
  }
}

runApp();
