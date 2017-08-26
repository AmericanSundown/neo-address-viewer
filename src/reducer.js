import { ADDRESS_LOOKUP, UPDATE_FIELD_ADDRESS } from './constants/actionTypes'

const defaultState = {};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADDRESS_LOOKUP:
            return {
                ...state,
                assets: {
                    neo: action.payload.asset[0],
                    gas: action.payload.asset[1]
                }
            };
        case UPDATE_FIELD_ADDRESS:
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            return state;
    }
};