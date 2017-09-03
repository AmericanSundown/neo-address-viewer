import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {
    EDIT_WALLET,
    TOGGLE_EDIT_FORM,
    UPDATE_FIELD_ADDRESS
} from '../../constants/actionTypes'
import agent from '../../agent';

const style = {
    display: "block"
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onToggleEdit: () =>
        dispatch({ type: TOGGLE_EDIT_FORM }),
    onEdit: (addresses, address, name) => {
        const payload = agent.Wallet.lookup(address);
        dispatch({ type: EDIT_WALLET, payload, addresses, address, name });
    },
    onChangeAddress: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'address', value }),
    onChangeName: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'name', value })
});

class Edit extends React.Component {
    constructor() {
        super();
        this.toggleEdit = (ev) => this.props.onToggleEdit();
        this.editWallet = (address, name) => (ev) => {
            if (!address) {
                address = this.props.defaultAddress;
            };
            if (!name) {
                name = this.props.defaultName;
            };
            // Need to exclude this current if different.
            const index = this.props.wallet.addresses.indexOf(this.props.defaultAddress);
            let addresses = [...this.props.wallet.addresses];
            if (index > -1) {
                addresses = [
                    ...this.props.wallet.addresses.splice(0, index),
                    ...this.props.wallet.addresses.splice(index + 1),
                    address
                ];
            };
            this.props.onClose();
            this.props.onEdit(addresses, address, name);
        };
        this.changeAddress = ev => this.props.onChangeAddress(ev.target.value);
        this.changeName = ev => this.props.onChangeName(ev.target.value);
    }
    render() {
        const address = this.props.common.address;
        const name = this.props.common.name;
        const open = this.props.navigation.showEditForm;
        const actions = [
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.editWallet(address, name)}
            />,
            <FlatButton
              label="Cancel"
              secondary={true}
              onClick={this.toggleEdit}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Edit wallet"
                    actions={actions}
                    modal={true}
                    open={open}
                >
                    <TextField
                        style={style}
                        hintText={this.props.defaultAddress}
                        floatingLabelText="Public address"
                        floatingLabelFixed={true}
                        onChange={this.changeAddress}
                    />
                    <TextField
                        style={style}
                        hintText={this.props.defaultName}
                        floatingLabelText="Name (optional)"
                        floatingLabelFixed={true}
                        onChange={this.changeName}
                    />
                </Dialog>
            </div>
        ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);