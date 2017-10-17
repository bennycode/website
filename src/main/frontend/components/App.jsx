import * as categoriesActionCreators from '../modules/categories/categoriesActionCreators';
import * as statusActionCreators from '../modules/status/statusActionCreators';
import Categories from './Categories.jsx';
import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchCategories();
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
          <Categories categories={this.props.categories} />
        </Grid>
        <Grid item={true} xs={12}>
          <Typography type="caption" gutterBottom={true} align="left">
            {`Version ${this.props.status.version}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const {categories, status} = state;
  return {
    categories,
    status,
  };
}

function mapDispatchToProps(dispatch) {
  let boundActionCreators = Object.assign(
    {},
    bindActionCreators(categoriesActionCreators, dispatch),
    bindActionCreators(statusActionCreators, dispatch)
  );
  return {
    actions: boundActionCreators,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
