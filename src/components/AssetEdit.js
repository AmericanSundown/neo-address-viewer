import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {
    CLOSE_EDIT,
    EDIT_WALLET,
    OPEN_EDIT,
    UPDATE_FIELD_ADDRESS
} from '../constants/actionTypes'
import agent from '../agent';

const style = {
    display: "block"
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onOpen: () =>
        dispatch({ type: OPEN_EDIT }),
    onClose: () =>
        dispatch({ type: CLOSE_EDIT }),
    onEdit: (address, name) => {
        const payload = agent.Wallet.lookup(address);
        dispatch({ type: EDIT_WALLET, payload, address, name });
    },
    onChangeAddress: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'address', value }),
    onChangeName: (value) =>
        dispatch({ type: UPDATE_FIELD_ADDRESS, key: 'name', value })
});

class AssetEdit extends React.Component {
    constructor() {
        super();
        this.openEdit = (ev) => this.props.onOpen();
        this.closeEdit = (ev) => this.props.onClose();
        this.editWallet = (address, name) => (ev) => {
            this.props.onClose();
            this.props.onEdit(address, name);
        };
        this.changeAddress = ev => this.props.onChangeAddress(ev.target.value);
        this.changeName = ev => this.props.onChangeName(ev.target.value);
    }
    render() {
        const address = this.props.address;
        const name = this.props.name;
        const open = this.props.navigation.edit.open ? this.props.navigation.edit.open : false;
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.closeEdit}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.editWallet(address, name)}
            />,
        ];
        return (
            <div>
                <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={true}
                open={open}
                >
                    <TextField
                        style={style}
                        hintText={this.props.wallet.address}
                        floatingLabelText="type wallet address"
                        floatingLabelFixed={true}
                        onChange={this.changeAddress}
                    />
                    <TextField
                        style={style}
                        hintText={this.props.wallet.name}
                        floatingLabelText="type wallet name"
                        floatingLabelFixed={true}
                        onChange={this.changeName}
                    />
                </Dialog>
            </div>
        ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetEdit);