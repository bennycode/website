import * as categoriesActionCreators from '../modules/categories/categoriesActionCreators';
import * as statusActionCreators from '../modules/status/statusActionCreators';
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

export default connect(null, {
  ...categoriesActionCreators,
  ...statusActionCreators,
})(App);
