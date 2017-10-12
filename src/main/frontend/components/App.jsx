import Categories from './Categories.jsx';
import FetchUtil from '../utils/FetchUtil';
import Grid from 'material-ui/Grid';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categories: []};
  }

  componentWillMount() {
    window
      .fetch('/rest/service/v1/categories')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(categories => this.setState({...this.state, categories}));
  }

  render() {
    return (
      <Grid container={true} spacing={16}>
        <Grid item={true} xs={12}>
          <Categories categories={this.state.categories} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
