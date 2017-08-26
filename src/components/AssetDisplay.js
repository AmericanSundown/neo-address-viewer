import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const mapStateToProps = state => ({ ...state });

class AssetDisplay extends React.Component {
    render() {
        const noneValue = "TBA";
        const neoValue = this.props.assets ? this.props.assets.neo.value : noneValue;
        const gasValue = this.props.assets ? this.props.assets.gas.value : noneValue;
        return (
            <div>
                <List>
                    <ListItem
                        disabled={true}
                    >
                        NEO: {neoValue}
                    </ListItem>
                    <ListItem
                        disabled={true}
                    >
                        GAS: {gasValue}
                    </ListItem>
                </List>
            </div>
        ); 
    }
}

export default connect(mapStateToProps)(AssetDisplay);