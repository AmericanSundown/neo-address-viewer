import React from 'react';
import { connect } from 'react-redux';
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
        this.loadTransaction(this.props.data.txid);
    }
    render() {
        return(
            <div>
            {this.props.data.txid}
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Transaction);