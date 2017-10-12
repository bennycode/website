import FetchUtil from '../utils/FetchUtil';
import List, {ListItem, ListItemText} from 'material-ui/List';
import React from 'react';

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
        <ListItem button={true} key={category.id} onClick={() => this.clickOnCategory(category)}>
          <ListItemText primary={category.name} />
        </ListItem>
      );
    });
  }

  render() {
    return <List dense={false}>{this.renderListItems()}</List>;
  }
}

export default Categories;
