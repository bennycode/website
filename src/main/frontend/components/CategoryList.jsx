import List, {ListItem, ListItemText} from 'material-ui/List';
import Playlists from './Playlists.jsx';
import PropTypes from 'prop-types';
import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      categories: this.props.categories,
    };
  }

  renderListItems() {
    return this.props.categories.map(category => {
      return (
        <ListItem button={true} component={Link} key={category.id} to={`/tutorials/${category.slug}`}>
          <ListItemText primary={category.name} />
        </ListItem>
      );
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <List dense={false}>{this.renderListItems()}</List>
          </Route>
          <Route path="/tutorials/:category_slug" component={Playlists} />
        </Switch>
      </Router>
    );
  }
}

CategoryList.childContextTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
