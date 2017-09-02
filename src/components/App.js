import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddressForm from './AddressForm';
import Asset from './Asset';
import Header from './Header';
import { connect } from 'react-redux';
import { ADD_PAGE, LIST_PAGE } from '../constants/pages';

const style = {
  maxWidth: 700,
  margin: "auto"
}

const displayPage = (page, self) => (page === self ? true : false);

const mapStateToProps = state => ({ ...state });

class App extends Component {
  render() {
    const asset = displayPage(this.props.navigation.currentPage, LIST_PAGE) ? <Asset /> : null;
    const addressForm = displayPage(this.props.navigation.currentPage, ADD_PAGE) ? <AddressForm /> : null;
    return (
      <div className="App1">
        <Header />
        <div style={style}>
          {asset}
          {addressForm}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
