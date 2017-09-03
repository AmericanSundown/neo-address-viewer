import { combineReducers } from 'redux';
import common from './reducers/common';
import wallet from './reducers/wallet';
import popup from './reducers/popup';

export default combineReducers({
    common,
    wallet,
    popup
});