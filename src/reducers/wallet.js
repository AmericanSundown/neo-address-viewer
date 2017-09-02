import {
    ADD_WALLET,
    REMOVE_WALLET,
    EDIT_WALLET,
    LOAD_WALLETS,
    LOOKUP_ADDRESS,
    GET_TRANSACTION,
    GET_HISTORY
} from '../constants/actionTypes'

const defaultState = {
    addresses: [],
    wallets: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_WALLET:
            return {
                ...state,
                addresses: action.addresses,
                wallets: {
                    ...state.wallets,
                    [action.address]: {
                        name: action.name
                    }
                }
            };
        case EDIT_WALLET:
            return {
                ...state,
                addresses: action.addresses,
                wallets: {
                    ...state.wallets,
                    [action.address]: {
                        ...state[action.address],
                        address: action.address,
                        name: action.name,
                        assets: {
                            neo: action.payload.NEO,
                            gas: action.payload.GAS
                        }
                    }
                }
            };
        case REMOVE_WALLET:
            return {
                ...state,
                addresses: action.addresses,
                wallets: {
                    ...state.wallets,
                    [action.address]: {}
                }
            };
        case LOOKUP_ADDRESS:
            return {
                ...state,
                wallets: {
                    ...state.wallets,
                    [action.address]: {
                        ...state[action.address],
                        address: action.address,
                        name: action.name,
                        assets: {
                            neo: action.payload.NEO,
                            gas: action.payload.GAS
                        }
                    }
                }
            };
        case GET_HISTORY:
            return {
                ...state,
                wallets: {
                    ...state.wallets,
                    [action.address]: {
                        ...state.wallets[action.address],
                        history: action.payload.history
                    }
                }
            };
        case GET_TRANSACTION:
            return {
                ...state,
                wallets: {
                    ...state.wallets,
                    [action.address]: {
                        ...state.wallets[action.address],
                        transaction: {
                            ...state[action.address].transaction,
                            [action.txid]: action.payload
                        }
                    }
                }
            }
        case LOAD_WALLETS:
            return {
                ...state,
                addresses: action.addresses,
                wallets: action.wallets
            }
        default:
            return state;        
    }
}