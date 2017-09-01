import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { OPEN_EDIT, REMOVE_WALLET } from '../constants/actionTypes'
import AssetEdit from './AssetEdit';
import Transaction from './Transaction';

const mapDispatchToProps = dispatch => ({
    onOpenEdit: () =>
        dispatch({ type: OPEN_EDIT }),
    onRemove: (address) =>
        dispatch({ type: REMOVE_WALLET, address })
});

class AssetCard extends React.Component {
    constructor() {
        super();
        this.openEdit = (ev) => this.props.onOpenEdit();
        this.removeWallet = (ev) => this.props.onRemove(this.props.address);
    }
    render() {
        return (
            <div>
                <AssetEdit />
                <Card>
                    <CardHeader
                    title={`${this.props.name}`}
                    subtitle={`NEO: ${this.props.neo} | GAS: ${this.props.gas}`}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardActions>
                    <FlatButton label="Edit" onClick={this.openEdit}/>
                    <FlatButton label="Delete" onClick={this.removeWallet}/>
                    </CardActions>
                    <CardText expandable={true}>
                        <p>Address: {this.props.address}</p>
                        <Transaction />
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AssetCard);