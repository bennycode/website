import Categories from './Categories.jsx';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentWillMount() {
    window.fetch('/rest/service/v1/categories')
      .then((response) => response.json())
      .then((categories) => this.setState({...this.state, categories}));
  }

  render() {
    return <Categories categories={this.state.categories} />;
  }
}

export default App;
