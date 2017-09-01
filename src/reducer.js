import { combineReducers } from 'redux';
import common from './reducers/common';
import wallet from './reducers/wallet';
import navigation from './reducers/navigation';

export default combineReducers({
    common,
    wallet,
    navigation
});