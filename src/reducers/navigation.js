import {
    TOGGLE_ADD_FORM,
    OPEN_EDIT,
    CLOSE_EDIT
} from '../constants/actionTypes'

const defaultState = {
    edit: {},
    showAddForm: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return {
                ...state,
                showAddForm: !state.showAddForm
            };
        case OPEN_EDIT:
            return {
                ...state,
                edit: {
                    open: true
                }
            };
        case CLOSE_EDIT:
            return {
                ...state,
                edit: {
                    open: false
                }
            };
        default:
            return state;
    }
};