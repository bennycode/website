// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-345105612
import 'raf/polyfill';

import CategoryList from './CategoryList';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router'
import {Provider} from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const withStore = (children, store) => <Provider store={store}>{children}</Provider>;

it('renders a list of categories', () => {
  const store = mockStore({
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
  });

  const component = renderer.create(
    withStore(
      <MemoryRouter>
        <CategoryList />
      </MemoryRouter>
      , store,
    ),
  );

  const tree = component.toJSON();

  expect(tree.type).toBe('div');
});
