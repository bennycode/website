import React from 'react';
import FetchUtil from '../utils/FetchUtil';
import PropTypes from 'prop-types';
import List, {ListItem, ListItemText} from 'material-ui/List';

class Playlists extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      playlists: [],
    };
  }

  componentWillMount() {
    this.updatePlaylists();
  }

  componentDidUpdate() {
    this.updatePlaylists();
  }

  updatePlaylists() {
    const categories = this.context.categories;
    const slug = this.props.match.params.category_slug;

    const category = categories.filter(category => category.slug === slug);

    if (category.length > 0) {
      window
        .fetch(`/rest/service/v1/category/${category[0].id}`)
        .then(FetchUtil.handleError)
        .then(response => response.json())
        .then(playlists => {
          if (this.refs.showPlaylists) this.setState({...this.state, playlists});
        });
    }
  }

  render() {
    return (
      <List dense={false} ref="showPlaylists">
        {this.renderListItems()}
      </List>
    );
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
