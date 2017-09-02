import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { GET_HISTORY } from '../constants/actionTypes';
import agent from '../agent';
import Transaction from './Transaction';

const mapDispatchToProps = dispatch => ({
    onLoad: (address) => {
        const payload = agent.Wallet.history(address);
        dispatch({ type: GET_HISTORY, payload, address });
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
            txList = this.props.history.map((tx, index) => (
                <ListItem key={index}>
                    <Transaction data={tx} />
                </ListItem>));
        };
        return (
            <List>
                {txList}
            </List>
        );
    }
};

export default connect(null, mapDispatchToProps)(TransactionList);