import React from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { GET_TRANSACTION } from '../constants/actionTypes';
import agent from '../agent';

const styles = {
    received: {
        color: "green"
    },
    sent: {
        color: "red"
    },
    default: {
        color: "black"
    },
    text: {
        wordBreak: "break-all"
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (txid) => {
        const payload = agent.Wallet.transaction(txid);
        dispatch({ type: GET_TRANSACTION, payload, txid});
    }
})

class Transaction extends React.Component {
    constructor() {
        super();
        this.loadTransaction = (txid) => this.props.onLoad(txid);
    }
    componentWillMount() {
        // Don't need the detail for now.
        // this.loadTransaction(this.props.data.txid);
    }
    highlightAsset(asset) {
        let highlight = 'default';
        if (asset < 0) {
            highlight = 'sent';
        };
        if (asset > 0) {
            highlight = 'received';
        };
        return (<span style={styles[highlight]}>{asset}</span>);
    }
    render() {
        const data = this.props.data;
        const content = (<div style={styles.text}>
            {data.txid}<br/>
            BLOCK: {data.block_index}<br/>
            NEO: {this.highlightAsset(data.NEO)}<br/>
            GAS: {this.highlightAsset(data.GAS)}<br/>
        </div>);
        return (content);
    }
}

export default connect(null, mapDispatchToProps)(Transaction);