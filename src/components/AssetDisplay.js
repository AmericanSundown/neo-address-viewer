import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AssetCard from './AssetCard';
import { LOOKUP_ADDRESS } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onLoad: (address, name) => {
        if (address) {
            const payload = agent.Wallet.lookup(address);
            dispatch({ type: LOOKUP_ADDRESS, payload, address, name });
        }
    }
})

class AssetDisplay extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        let wallet = this.props.wallet;
        if (window.localStorage.key('wallet')) {
            wallet = JSON.parse(window.localStorage.getItem('wallet'));
        }
        this.props.onLoad(wallet.address, wallet.name);
    }
    render() {
        const noneValue = "TBA";
        const wallet = this.props.wallet;
        const neoValue = wallet.assets.neo ? wallet.assets.neo.value : noneValue;
        const gasValue = wallet.assets.gas ? wallet.assets.gas.value : noneValue;
        const walletName = wallet.name ? wallet.name : noneValue;
        const walletAddress = wallet.address ? wallet.address : noneValue;
        return (
            <div>
                <List>
                    <ListItem
                        disabled={true}
                    >
                        <AssetCard
                            name={walletName}
                            address={walletAddress}
                            neo={neoValue}
                            gas={gasValue}
                            key={0}
                        />
                    </ListItem>
                </List>
            </div>
        ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetDisplay);