import {
    ADDRESS_LOOKUP,
    UPDATE_FIELD_ADDRESS,
    TOGGLE_MENU,
    SET_NAVIGATION_OPEN,
    CHANGE_PAGE
} from './constants/actionTypes'
import { ADD_PAGE, LIST_PAGE } from './constants/pages';

const defaultState = {
    navigation: {
        open: false,
        currentPage: LIST_PAGE
    }
};

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
        case TOGGLE_MENU:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    open: !state.navigation.open
                }
            }
        case SET_NAVIGATION_OPEN:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    open: action.open
                }
            }
        case CHANGE_PAGE:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    currentPage: action.page
                }
            }
        default:
            return state;
    }
};