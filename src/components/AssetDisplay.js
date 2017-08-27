import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AssetCard from './AssetCard';

const mapStateToProps = state => ({ ...state });

class AssetDisplay extends React.Component {
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

export default connect(mapStateToProps)(AssetDisplay);