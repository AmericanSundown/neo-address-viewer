import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Detail from './Detail';
import { REMOVE_WALLET, LOAD_WALLETS, LOOKUP_ADDRESS } from '../../constants/actionTypes';
import agent from '../../agent';

const mapStateToProps = state => ({ ...state.wallet });

const mapDispatchToProps = dispatch => ({
    onLoad: (address, name) => {
        if (address) {
            const payload = agent.Wallet.lookup(address);
            dispatch({ type: LOOKUP_ADDRESS, payload, address, name });
        };
    },
    onWalletsLoad: (addresses, wallets) => 
        dispatch({ type: LOAD_WALLETS, addresses, wallets }),
    onRemove: (addresses, address) =>
        dispatch({ type: REMOVE_WALLET, addresses, address })

})

class Asset extends React.Component {
    constructor() {
        super();
        this.loadWallets = (addresses, wallets) => this.props.onWalletsLoad(addresses, wallets);
        this.removeWallet = (address) => (ev) => {
            const index = this.props.addresses.indexOf(address);
            const addresses = [...this.props.addresses.slice(0, index), ...this.props.addresses.slice(index + 1)];
            this.props.onRemove(addresses, address);
        };
    }
    componentWillMount() {
        let addresses = this.props.addresses;
        let wallets = this.props.wallets;
        if (window.localStorage.getItem('addresses')) {
            addresses = JSON.parse(window.localStorage.getItem('addresses'));
            wallets = JSON.parse(window.localStorage.getItem('wallets'));
        }
        this.loadWallets(addresses, wallets);
        addresses.map((address) => this.props.onLoad(address, wallets[address].name));
    }
    render() {
        const walletListItems = this.props.addresses.map((address, index) => (
            <ListItem key={index} disabled={true}>
                <Detail
                    data={this.props.wallets[address]}
                    onRemove={this.removeWallet(address)}
                />
            </ListItem>
        ));
        let walletList = 'No wallet has been added yet.';
        if (this.props.addresses.length) {
            walletList = <List>{walletListItems}</List>
        }
        return (
            <div>
                {walletList}
            </div>
        ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Asset);