import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import agent from '../agent';
import { connect } from 'react-redux';
import { ADDRESS_LOOKUP, UPDATE_FIELD_ADDRESS } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ADDRESS_LOOKUP, payload }),
    onChangeAddress: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'address', value }),
    onChangeName: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'name', value }),
    onLookup: address =>
        dispatch({ type: ADDRESS_LOOKUP, payload: agent.Wallet.lookup(address) })
})

const styles = {
    "wrapper": {
        width: "33%",
        margin: "0 auto",
        
    },
    "inputField": {
        display: "block",
    },
    "button": {
        margin: 12,
    }
  };

class AddressForm extends Component {
    constructor() {
        super();
        this.changeAddress = ev => this.props.onChangeAddress(ev.target.value);
        this.changeName = ev => this.props.onChangeName(ev.target.value);
        this.lookupWallet = address => ev => {
            ev.preventDefault();
            this.props.onLookup(address);
        };
    }

    render() {
        const address = this.props.address;
        return (
            <div style={styles.wrapper}>
                <TextField
                    style={styles.inputField}
                    hintText=""
                    floatingLabelText="wallet name"
                    onChange={this.changeName}
                />
                <TextField
                    style={styles.inputField}
                    hintText=""
                    floatingLabelText="wallet address"
                    onChange={this.changeAddress}
                />
                <RaisedButton
                    label="Add"
                    primary={true}
                    style={styles.button}
                    onClick={this.lookupWallet(address)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);