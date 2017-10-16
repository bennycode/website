import * as statusActions from '../modules/status/statusActions';
import Categories from './Categories.jsx';
import FetchUtil from '../utils/FetchUtil';
import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentWillMount() {
    window
      .fetch('/rest/service/v1/categories')
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(categories => this.setState({...this.state, categories}));

    this.props.actions.fetchVersion();
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
            {`Version ${this.props.version}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    version: state.status.version,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(statusActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
