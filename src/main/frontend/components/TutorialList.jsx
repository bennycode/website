import FetchUtil from '../utils/FetchUtil';
import List, {ListItem, ListItemText} from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';

class TutorialList extends React.Component {
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
    if (this.state.playlists.length === 0) this.updatePlaylists();
  }

  updatePlaylists() {
    const categories = this.context.categories;
    const slug = this.props.match.params.category_slug;

    const category = categories.filter(category => category.slug === slug)[0];

    if (category) {
      window
        .fetch(`/rest/service/v1/category/${category.id}`)
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

TutorialList.contextTypes = {
  categories: PropTypes.array,
};

export default TutorialList;
