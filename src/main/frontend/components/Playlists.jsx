import React from 'react';
import FetchUtil from '../utils/FetchUtil';
import PropTypes from 'prop-types';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const categories = this.context.categories;
    const slug = this.props.match.params.category_slug;

    const category = categories.filter(category => category.slug === slug);

    if (category.length > 0) {
      window
        .fetch(`/rest/service/v1/category/${category[0].id}`)
        .then(FetchUtil.handleError)
        .then(response => response.json())
        .then(console.log);
    }
  }

  render() {
    return <p>{`Category Slug: ${this.context.categories}`}</p>;
  }
}

Playlists.contextTypes = {
  categories: PropTypes.array,
};

export default Playlists;
