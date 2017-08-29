import Categories from './Categories.jsx';
import React from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return <Categories categories="{this.props.categories}" />;
  }
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
