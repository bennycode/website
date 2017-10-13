import React from 'react';
import FetchUtil from '../utils/FetchUtil';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
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
        .then(playlists => this.setState({...this.state, playlists}));
    }
  }

  render() {
    return <List dense={false}>{this.renderListItems()}</List>;
  }

  renderListItems() {
    return this.state.playlists.map(playlist => {
      return (
        <ListItem button={true} key={playlist.id}>
          <ListItemText primary={playlist.name} />
        </ListItem>
      );
    });
  }
}

Playlists.contextTypes = {
  categories: PropTypes.array,
};

export default Playlists;
