import React from 'react';
import { connect } from 'react-redux';
import { GET_TRANSACTION } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({ ...state.wallet });

const mapDispatchToProps = dispatch => ({
    onLoad: (address) => {
        const payload = agent.Wallet.history(address);
        dispatch({ type: GET_TRANSACTION, payload });
    }
});

class Transaction extends React.Component {
    constructor() {
        super();
        this.loadTransactions = (address) => this.props.onLoad(address);
    }
    componentWillMount() {
        this.loadTransactions(this.props.address);
    }
    render() {
        let txList = "No transactions made.";
        if (this.props.list) {
            txList = this.props.list.map((tx, index) => <li key={index}>{tx.txid}</li>);
        };
        return (
            <ul>
                {txList}
            </ul>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);