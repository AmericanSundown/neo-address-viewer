import {
    UPDATE_FIELD_ADDRESS
} from '../constants/actionTypes'

const defaultState = {
    address: "",
    name: ""
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_FIELD_ADDRESS:
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            return state;
    }
};