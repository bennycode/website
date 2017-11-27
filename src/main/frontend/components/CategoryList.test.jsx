import CategoryList from './CategoryList';
import {Provider} from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const withStore = (children, store) => {
  return <Provider store={store}>{children}</Provider>;
};

const mockStore = () => configureStore([thunk.withExtraArgument()]);


test('works', () => {
  expect(true).toBe(true);
  const state = {
    categoryState: {
      categories: [{
        color: "#8CBE29",
        id: 7,
        name: "Android",
        slug: "android",
      }],
    },
    statusState: {
      version: '0.0.7',
    },
  };

  const component = renderer.create(
    withStore(<CategoryList />, mockStore()(state),
    ),
  );

  expect(true).toBe(true);
});
