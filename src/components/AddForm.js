import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { ADD_WALLET, UPDATE_FIELD_ADDRESS, TOGGLE_FORM } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onChangeAddress: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'address', value }),
    onChangeName: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'name', value }),
    onAddWallet: (addresses, address, name, wallets) => {
        const payload = agent.Wallet.lookup(address);
        dispatch({ type: ADD_WALLET, payload, addresses, address, name, wallets })
    },
    onToggleAddForm: () =>
        dispatch({ type: TOGGLE_FORM, key: 'add' })
})

class AddForm extends Component {
    constructor() {
        super();
        this.changeAddress = ev => this.props.onChangeAddress(ev.target.value);
        this.changeName = ev => this.props.onChangeName(ev.target.value);
        this.toggleAddForm = (ev) => this.props.onToggleAddForm();
        this.addWallet = (address, name) => ev => {
            ev.preventDefault();
            if (address) {
                const wallets = {
                    ...this.props.wallets,
                    [address]: { name }
                };
                let addresses = [...this.props.wallet.addresses];
                if (!addresses.includes(address)) {
                    addresses = [...this.props.wallet.addresses, address];
                };
                this.props.onAddWallet(addresses, address, name, wallets);
            };
            this.props.onToggleAddForm();
        };
    }
    render() {
        const address = this.props.common.address;
        const name = this.props.common.name;
        const open = this.props.open;
        const actions = [
            <FlatButton
              label="Add"
              primary={true}
              onClick={this.addWallet(address, name)}
            />,
            <FlatButton
              label="Close"
              secondary={true}
              onClick={this.toggleAddForm}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Add new wallet"
                    actions={actions}
                    modal={true}
                    open={open}
                >
                    <TextField
                        hintText=""
                        floatingLabelText="Public address"
                        onChange={this.changeAddress}
                    />
                    <br/>
                    <TextField
                        hintText=""
                        floatingLabelText="Name (optional)"
                        onChange={this.changeName}
                    />
                </Dialog>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);