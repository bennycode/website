import Grid from 'material-ui/Grid';
import List, {ListItem, ListItemText} from 'material-ui/List';
import React from 'react';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            {`Version ${this.props.status.version}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default connect(state => ({
  categories: state.categoryState.categories,
  status: state.status,
}))(CategoryList);
