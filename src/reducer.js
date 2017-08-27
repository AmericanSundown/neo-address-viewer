import {
    ADDRESS_LOOKUP,
    UPDATE_FIELD_ADDRESS,
    TOGGLE_MENU,
    SET_NAVIGATION_OPEN,
    CHANGE_PAGE,
    ADD_WALLET,
    LOOKUP_ADDRESS
} from './constants/actionTypes'
import { ADD_PAGE, LIST_PAGE } from './constants/pages';

const defaultState = {
    address: "",
    name: "",
    navigation: {
        open: false,
        currentPage: LIST_PAGE
    },
    wallet: {
        name: "",
        address: "",
        assets: {}
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADDRESS_LOOKUP:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    assets: {
                        neo: action.payload.asset[0],
                        gas: action.payload.asset[1]
                    }
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
            };
        case SET_NAVIGATION_OPEN:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    open: action.open
                }
            };
        case CHANGE_PAGE:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    currentPage: action.page
                }
            };
        case ADD_WALLET:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    name: action.payload.name,
                    address: action.payload.address
                }
            };
        case LOOKUP_ADDRESS:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    address: action.address,
                    name: action.name,
                    assets: {
                        neo: action.payload.asset[0],
                        gas: action.payload.asset[1]
                    }
                }
            };
        default:
            return state;
    }
};