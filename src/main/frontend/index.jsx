import Categories from './components/Categories.jsx';
import React from 'react';
import {render} from 'react-dom'

const target = document.getElementById('root');

function getCategories() {
  return window.fetch('/rest/service/v1/categories', {
    method: 'get'
  }).then((response) => {
    return response.json();
  });
}

render(<Categories categories="{getCategories()}" />, target);
