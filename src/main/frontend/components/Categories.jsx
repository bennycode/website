import React from 'react';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';

class Categories extends React.Component {
  renderListItems() {
    return this.props.categories.map((category) => {
      return <ListItem button key={category.id}>
        <ListItemText primary={category.name} />
      </ListItem>
    });
  }

  render() {
    return <List dense={false}>{this.renderListItems()}</List>;
  }
}

export default Categories;
