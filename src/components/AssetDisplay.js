import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AssetCard from './AssetCard';
import { LOOKUP_ADDRESS } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onLoad: () => {
        const wallet = JSON.parse(window.localStorage.getItem('wallet'));
        if (wallet) {
            const address = wallet.address;
            const name = wallet.name;
            const payload = agent.Wallet.lookup(address);
            dispatch({ type: LOOKUP_ADDRESS, payload, name, address });
        };
    }
})

class AssetDisplay extends React.Component {
    componentWillMount() {
        this.props.onLoad();
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