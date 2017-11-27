import CategoryList from './CategoryList';
import React from 'react';
import renderer from 'react-test-renderer';

test('works', () => {
  expect(true).toBe(true);
  renderer.render(<CategoryList />);
});
