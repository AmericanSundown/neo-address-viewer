import {
    ADDRESS_LOOKUP,
    UPDATE_FIELD_ADDRESS,
    TOGGLE_MENU,
    SET_NAVIGATION_OPEN,
    CHANGE_PAGE,
    ADD_WALLET,
    REMOVE_WALLET,
    EDIT_WALLET,
    LOOKUP_ADDRESS,
    OPEN_EDIT,
    CLOSE_EDIT
} from './constants/actionTypes'
import { ADD_PAGE, LIST_PAGE } from './constants/pages';

const defaultState = {
    address: "",
    name: "",
    navigation: {
        open: false,
        currentPage: LIST_PAGE,
        edit: {}
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
        case EDIT_WALLET:
            return {
                ...state,
                wallet: {
                    ...state.wallet,
                    address: action.payload.address,
                    name: action.payload.name,
                    assets: {
                        neo: action.payload.asset[0],
                        gas: action.payload.asset[1]
                    }
                }
            };
        case REMOVE_WALLET:
            return {
                ...state,
                wallet: {
                    name: "",
                    address: "",
                    assets: {}
                }
            };
        case OPEN_EDIT:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    edit: {
                        open: true
                    }
                }
            };
        case CLOSE_EDIT:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    edit: {
                        open: false
                    }
                }
            }
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