import React from 'react';

class Categories extends React.Component {
  renderListItems() {
    return this.props.categories.map((category) => <li key={category.id}>{category.name}</li>);
  }

  render() {
    return <ul>{this.renderListItems()}</ul>;
  }
}

export default Categories;
