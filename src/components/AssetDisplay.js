import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AssetCard from './AssetCard';

const mapStateToProps = state => ({ ...state });

class AssetDisplay extends React.Component {
    render() {
        const noneValue = "TBA";
        const neoValue = this.props.assets ? this.props.assets.neo.value : noneValue;
        const gasValue = this.props.assets ? this.props.assets.gas.value : noneValue;
        const walletName = this.props.name ? this.props.name : noneValue;
        const walletAddress = this.props.address ? this.props.address : noneValue;
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