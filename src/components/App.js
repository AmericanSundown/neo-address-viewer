import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddForm from './AddForm';
import Asset from './Asset';
import Header from './Header';
import { connect } from 'react-redux';

const style = {
  maxWidth: 700,
  margin: "auto"
}

const mapStateToProps = state => ({ ...state });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={style}>
          <AddForm />
          <Asset />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
