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
        <Router>
          <ListItem button={true} key={category.id}>
            <Link to={`/tutorials/${category.name}`}>
              <ListItemText primary={category.name} />
            </Link>
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
