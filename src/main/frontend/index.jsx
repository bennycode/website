import App from './components/App';
import React from 'react';
import store from './store';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

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
