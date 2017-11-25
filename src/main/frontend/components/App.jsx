import * as CategoryActionCreators from '../modules/category/CategoryActionCreators';
import * as StatusActionCreators from '../modules/status/StatusActionCreators';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import CategoryList from './CategoryList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TutorialList from './TutorialList';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchVersion();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/(categories)?" component={CategoryList} />
          <Route path="/categories/:category_slug" component={TutorialList} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  fetchCategories: PropTypes.func,
  fetchVersion: PropTypes.func,
};

export default connect(undefined, {
  ...CategoryActionCreators,
  ...StatusActionCreators,
})(App);
