import { TOGGLE_FORM } from '../constants/actionTypes'

const defaultState = {
    add: false,
    about: false,
    edit: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return {
                ...state,
                [action.key]: !state[action.key]
            };
        default:
            return state;
    }
};