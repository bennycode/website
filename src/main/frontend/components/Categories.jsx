import FetchUtil from '../utils/FetchUtil';
import List, {ListItem, ListItemText} from 'material-ui/List';
import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Categories extends React.Component {
  clickOnCategory(category) {
    window
      .fetch(`/rest/service/v1/category/${category.id}`)
      .then(FetchUtil.handleError)
      .then(response => response.json())
      .then(console.log);
  }

  renderListItems() {
    return this.props.categories.map(category => {
      return (
        <Router key={category.id}>
          <ListItem button={true} component={Link} key={category.id} to={`/tutorials/${category.slug}`}>
            <ListItemText primary={category.name} />
          </ListItem>
        </Router>
      );
    });
  }

  render() {
    return <List dense={false}>{this.renderListItems()}</List>;
  }
}

export default Categories;
