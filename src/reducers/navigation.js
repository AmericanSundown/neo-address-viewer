import {
    TOGGLE_ADD_FORM,
    TOGGLE_EDIT_FORM
} from '../constants/actionTypes'

const defaultState = {
    showAddForm: false,
    showEditForm: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return {
                ...state,
                showAddForm: !state.showAddForm
            };
        case TOGGLE_EDIT_FORM:
            return {
                ...state,
                showEditForm: !state.showEditForm
            };
        default:
            return state;
    }
};