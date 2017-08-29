import Categories from './Categories.jsx';
import React from 'react';

class App extends React.Component {
  componentWillMount() {
    window.fetch('/rest/service/v1/categories', {
      method: 'get'
    }).then((response) => {
      this.props.categories = response.json();
    });
  }

  render() {
    return <Categories categories="{this.props.categories}" />;
  }
}

export default App;
