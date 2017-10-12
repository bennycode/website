import FetchUtil from '../utils/FetchUtil';
import List, {ListItem, ListItemText} from 'material-ui/List';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Gist = ({match}) => <p>{match.params.category_slug}</p>;

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
          <Route path="/tutorials/:category_slug" component={Gist} />
        </Switch>
      </Router>
    );
  }
}

export default Categories;
