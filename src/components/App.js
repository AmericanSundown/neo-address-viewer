import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddressForm from './AddressForm';
import AssetDisplay from './AssetDisplay';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddressForm />
        <AssetDisplay />
      </div>
    );
  }
}

export default App;
