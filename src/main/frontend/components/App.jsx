import Categories from './Categories.jsx';
import Grid from 'material-ui/Grid';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    function handleErrors(response) {
      if (!response.ok) throw new Error(response.statusText);
      return response;
    }

    window
      .fetch('/rest/service/v1/categories')
      .then(handleErrors)
      .then(response => response.json())
      .then(categories => this.setState({...this.state, categories}));
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Categories categories={this.state.categories} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
