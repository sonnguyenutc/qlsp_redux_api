import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import Navigate from './components/Navidate/Navigate';
import { connect } from 'react-redux';


class App extends Component {

  

 

  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <Navigate></Navigate>
        </div>
      </Router>
    );
  }
}




const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch({
        type: "READ"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
