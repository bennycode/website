import * as CategoryActionCreators from '../modules/category/CategoryActionCreators';
import * as StatusActionCreators from '../modules/status/StatusActionCreators';
import CategoryList from './CategoryList';
import React from 'react';
import TutorialList from './TutorialList';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {
  componentWillMount() {
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

export default connect(undefined, {
  ...CategoryActionCreators,
  ...StatusActionCreators,
})(App);
