import React from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { GET_TRANSACTION } from '../constants/actionTypes';
import agent from '../agent';

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
    render() {
        return(
            <div>
            {this.props.data.txid}
            <Divider />
            BLOCK: {this.props.data.block_index}<br/>
            NEO: {this.props.data.NEO}<br/>
            GAS:{this.props.data.GAS}<br/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Transaction);