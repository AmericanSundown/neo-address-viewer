import React from 'react';
import { connect } from 'react-redux';
import { GET_HISTORY } from '../constants/actionTypes';
import agent from '../agent';
import Transaction from './Transaction';

const mapDispatchToProps = dispatch => ({
    onLoad: (address) => {
        const payload = agent.Wallet.history(address);
        dispatch({ type: GET_HISTORY, payload });
    }
});

class TransactionList extends React.Component {
    constructor() {
        super();
        this.loadTransactions = (address) => this.props.onLoad(address);
    }
    componentWillMount() {
        this.loadTransactions(this.props.address);
    }
    render() {
        let txList = "No transactions made.";
        if (this.props.history) {
            txList = this.props.history.map((tx, index) => <li key={index}><Transaction data={tx} /></li>);
        };
        return (
            <ul>
                {txList}
            </ul>
        );
    }
};

export default connect(null, mapDispatchToProps)(TransactionList);