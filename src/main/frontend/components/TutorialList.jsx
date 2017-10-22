import * as TutorialActionCreators from '../modules/tutorial/TutorialActionCreators';
import List, {ListItem, ListItemText} from 'material-ui/List';
import React from 'react';
import {connect} from 'react-redux';

class TutorialList extends React.Component {
  componentDidMount() {
    this.getTutorials();
  }

  componentDidUpdate() {
    if (this.props.tutorials.length === 0) this.getTutorials();
  }

  getTutorials() {
    const categories = this.props.categories;
    const slug = this.props.match.params.category_slug;
    const category = categories.filter(category => category.slug === slug)[0];
    if (category) this.props.fetchTutorialsByCategoryId(category.id);
  }

  render() {
    return <List dense={false}>{this.renderListItems()}</List>;
  }

  renderListItems() {
    return this.props.tutorials.map(tutorial => {
      return (
        <ListItem button={true} key={tutorial.id}>
          <ListItemText primary={tutorial.name} />
        </ListItem>
      );
    });
  }
}

export default connect(
  state => ({
    categories: state.categoryState.categories,
    tutorials: state.tutorialState.tutorials,
  }),
  {
    ...TutorialActionCreators,
  }
)(TutorialList);
