import List, {ListItem, ListItemText} from 'material-ui/List';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from 'material-ui/Typography';

class CategoryList extends React.Component {
  renderListItems() {
    return this.props.categories.map(category => {
      return (
        <ListItem button={true} component={Link} key={category.id} to={`/categories/${category.slug}`}>
          <ListItemText primary={category.name} />
        </ListItem>
      );
    });
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
          <List dense={false}>{this.renderListItems()}</List>
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

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  version: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    categories: state.categoryState.categories,
    version: state.statusState.version,
  };
}

export default connect(mapStateToProps)(CategoryList);
