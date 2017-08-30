import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { REMOVE_WALLET } from '../constants/actionTypes'

const mapDispatchToProps = dispatch => ({
    onRemove: (address) =>
        dispatch({ type: REMOVE_WALLET, address })
});

class AssetCard extends React.Component {
    constructor() {
        super();
        this.removeWallet = (ev) => this.props.onRemove(this.props.address);
    }
    render() {
        return (
            <Card>
                <CardHeader
                title={`${this.props.name}`}
                subtitle={`NEO: ${this.props.neo} | GAS: ${this.props.gas}`}
                actAsExpander={true}
                showExpandableButton={true}
                />
                <CardActions>
                <FlatButton label="Edit" />
                <FlatButton label="Delete" onClick={this.removeWallet}/>
                </CardActions>
                <CardText expandable={true}>
                    <p>Address: {this.props.address}</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
}

export default connect(null, mapDispatchToProps)(AssetCard);