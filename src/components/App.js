import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddressForm from './AddressForm';
import AssetDisplay from './AssetDisplay';
import Header from './Header';

const style = {
  maxWidth: 700,
  margin: "auto"
}

class App extends Component {
  render() {
    return (
      <div className="App1">
        <Header />
        <AddressForm />
        <div style={style}>
          <AssetDisplay />
        </div>
      </div>
    );
  }
}

export default App;
