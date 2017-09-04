import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { TOGGLE_FORM } from '../../constants/actionTypes'
import Edit from './Edit';
import TransactionList from '../TransactionList';

const shell = window.require('electron').shell;

const styles = {
    text: {
        wordBreak: "break-all"
    }
};

const mapDispatchToProps = dispatch => ({
    onToggleEdit: () =>
        dispatch({ type: TOGGLE_FORM, key: 'edit' })
});

class Detail extends React.Component {
    constructor() {
        super();
        this.toggleEdit = (ev) => this.props.onToggleEdit();
    }
    handleClick(ev) {
        ev.preventDefault();
        const url = "https://neotracker.io";
        shell.openExternal(url)
    }
    render() {
        const noneValue = "TBA";
        const name = this.props.data.name ? this.props.data.name : noneValue;
        const address = this.props.data.address ? this.props.data.address : noneValue;
        const neo = this.props.data.assets ? this.props.data.assets.neo.balance : noneValue;
        const gas = this.props.data.assets ? this.props.data.assets.gas.balance : noneValue;
        const subTitle = <p>{`NEO: ${neo}`}<br/>{`GAS: ${gas}`}</p>;
        return (
            <div>
                <Edit
                    defaultAddress={this.props.data.address}
                    defaultName={this.props.data.name}
                />
                <Card>
                    <CardHeader
                        title={`${name}`}
                        titleStyle={styles.text}
                        subtitle={subTitle}
                        subtitleStyle={styles.text}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardActions>
                    <FlatButton primary={true} label="Edit" onClick={this.toggleEdit}/>
                    <FlatButton secondary={true} label="Delete" onClick={this.props.onRemove}/>
                    </CardActions>
                    <CardText expandable={true}>
                        <Divider/>
                        <p>
                            Public address is:<br/>
                            {address}
                        </p>
                        <p>
                            Transaction history is listed below in chronological order.<br/>
                            Click on a transaction to view details at <a href="" onClick={this.handleClick}>Neotracker</a>.
                        </p>
                        <Divider/>
                        <TransactionList address={this.props.data.address} history={this.props.data.history} />
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Detail);