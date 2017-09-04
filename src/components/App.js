import React, { Component } from 'react';
import '../App.css';
import AddForm from './AddForm';
import AboutDialog from './AboutDialog';
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
          <AddForm open={this.props.popup.add} />
          <AboutDialog open={this.props.popup.about} />
          <Asset />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
