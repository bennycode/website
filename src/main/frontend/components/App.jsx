import * as categoriesActionCreators from '../modules/categories/categoriesActionCreators';
import * as statusActionCreators from '../modules/status/statusActionCreators';
import CategoryList from './CategoryList.jsx';
import Grid from 'material-ui/Grid';
import React from 'react';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchVersion();
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
          <CategoryList categories={this.props.categories} />
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

export default connect(
  state => ({
    categories: state.categoryState.categories,
    status: state.status,
  }),
  {
    ...categoriesActionCreators,
    ...statusActionCreators,
  }
)(App);
