import React from 'react';

class Categories extends React.Component {
  renderItems() {
    let listItems = [];
    this.props.categories.forEach((category) => listItems.push(<li>{category.name}</li>));
    return listItems;
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default Categories;
