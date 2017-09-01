import {
    ADDRESS_LOOKUP,
    ADD_WALLET,
    REMOVE_WALLET,
    EDIT_WALLET,
    LOOKUP_ADDRESS,
    GET_TRANSACTION,
    GET_HISTORY
} from '../constants/actionTypes'

const defaultState = {
    name: "",
    address: "",
    assets: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADDRESS_LOOKUP:
            return {
                ...state,
                assets: {
                    neo: action.payload.NEO,
                    gas: action.payload.GAS
                }
            };
        case ADD_WALLET:
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address
            };
        case EDIT_WALLET:
            return {
                ...state,
                address: action.address,
                name: action.name,
                assets: {
                    neo: action.payload.NEO,
                    gas: action.payload.GAS
                }
            };
        case REMOVE_WALLET:
            return {
                ...state,
                name: "",
                address: "",
                assets: {}
            };
        case LOOKUP_ADDRESS:
            return {
                ...state,
                address: action.address,
                name: action.name,
                assets: {
                    neo: action.payload.NEO,
                    gas: action.payload.GAS
                }
            };
        case GET_HISTORY:
            return {
                ...state,
                history: action.payload.history
            };
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: {
                    ...state.wallet.transaction,
                    [action.txid]: action.payload
                }
            };
        default:
            return state;        
    }
}