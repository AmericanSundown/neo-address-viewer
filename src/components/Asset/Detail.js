import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { OPEN_EDIT } from '../../constants/actionTypes'
import Edit from './Edit';
import TransactionList from '../TransactionList';

const mapDispatchToProps = dispatch => ({
    onOpenEdit: () =>
        dispatch({ type: OPEN_EDIT })
});

class Detail extends React.Component {
    constructor() {
        super();
        this.openEdit = (ev) => this.props.onOpenEdit();
    }
    render() {
        const noneValue = "TBA";
        const name = this.props.data.name ? this.props.data.name : noneValue;
        const address = this.props.data.address ? this.props.data.address : noneValue;
        const neo = this.props.data.assets ? this.props.data.assets.neo.balance : noneValue;
        const gas = this.props.data.assets ? this.props.data.assets.gas.balance : noneValue;
        return (
            <div>
                <Edit
                    defaultAddress={this.props.data.address}
                    defaultName={this.props.data.name}
                />
                <Card>
                    <CardHeader
                    title={`${name}`}
                    subtitle={`NEO: ${neo} | GAS: ${gas}`}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                    <CardActions>
                    <FlatButton label="Edit" onClick={this.openEdit}/>
                    <FlatButton label="Delete" onClick={this.props.onRemove}/>
                    </CardActions>
                    <CardText expandable={true}>
                        <p>Address: {address}</p>
                        <TransactionList address={this.props.data.address} history={this.props.data.history} />
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Detail);