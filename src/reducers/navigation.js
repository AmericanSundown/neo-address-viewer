import {
    TOGGLE_MENU,
    SET_NAVIGATION_OPEN,
    CHANGE_PAGE,
    OPEN_EDIT,
    CLOSE_EDIT
} from '../constants/actionTypes'
import { ADD_PAGE, LIST_PAGE } from '../constants/pages';

const defaultState = {
    open: false,
    currentPage: LIST_PAGE,
    edit: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                open: !state.open
            };
        case SET_NAVIGATION_OPEN:
            return {
                ...state,
                open: action.open
            };
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
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