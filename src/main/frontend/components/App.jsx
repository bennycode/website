import Categories from './Categories.jsx';
import FetchUtil from '../utils/FetchUtil';
import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      version: '',
    };
  }

  componentWillMount() {
    window
      .fetch('/rest/service/v1/categories')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(categories => this.setState({...this.state, categories}));

    window
      .fetch('/status?info=version')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(info => this.setState({...this.state, version: info.version}));
  }

  render() {
    return (
      <Grid container={true} spacing={16}>
        <Grid item={true} xs={12}>
          <Typography type="headline" component="h2">
            {'Tutorials'}
          </Typography>
        </Grid>
        <Grid item={true} xs={12}>
          <Categories categories={this.state.categories} />
        </Grid>
        <Grid item={true} xs={12}>
          <Typography type="caption" gutterBottom={true} align="left">
            {`Version ${this.state.version}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default App;
