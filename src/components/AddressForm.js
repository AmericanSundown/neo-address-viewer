import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { ADD_WALLET, ADDRESS_LOOKUP, UPDATE_FIELD_ADDRESS } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: ADDRESS_LOOKUP, payload }),
    onChangeAddress: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'address', value }),
    onChangeName: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'name', value }),
    onAddWallet: (address, name) => {
        const payload = { address, name };
        dispatch({ type: ADD_WALLET, payload })
    }
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
        this.addWallet = (address, name) => ev => {
            ev.preventDefault();
            this.props.onAddWallet(address, name);
        };
    }

    render() {
        const address = this.props.address;
        const name = this.props.name;
        return (
            <div style={styles.wrapper}>
                <TextField
                    style={styles.inputField}
                    hintText=""
                    floatingLabelText="type wallet name"
                    onChange={this.changeName}
                />
                <TextField
                    style={styles.inputField}
                    hintText=""
                    floatingLabelText="type wallet address"
                    onChange={this.changeAddress}
                />
                <RaisedButton
                    label="Add"
                    primary={true}
                    style={styles.button}
                    onClick={this.addWallet(address, name)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);