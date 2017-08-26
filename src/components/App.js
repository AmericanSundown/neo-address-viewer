import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../logo.svg';
import '../App.css';
import AddressForm from './AddressForm';
import AssetDisplay from './AssetDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="NEO Wallet Viewer"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <AddressForm />
        <AssetDisplay />
      </div>
    );
  }
}

export default App;
