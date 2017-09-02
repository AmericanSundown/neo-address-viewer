import {
    ASYNC_START,
    ASYNC_END,
    ADD_WALLET,
    EDIT_WALLET,
    REMOVE_WALLET
} from './constants/actionTypes';

const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        store.dispatch({ type: ASYNC_START, subtype: action.type });

        action.payload.then(
            res => {
                console.log('RESULT', res);
                action.payload = res;
                store.dispatch({ type: ASYNC_END, promise: action.payload });
                store.dispatch(action);
            },
            error => {
                console.log('ERROR', error);
                action.error = true;
                action.payload = error.response.body;
                store.dispatch({ type: ASYNC_END, promise: action.payload });
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};

const localStorageMiddleware = store => next => action => {
    if (action.type === ADD_WALLET || action.type === EDIT_WALLET) {
        if (!action.error) {
            window.localStorage.setItem('addresses', JSON.stringify(action.addresses));
            window.localStorage.setItem('wallets', JSON.stringify(action.wallets));
        }
    } else if (action.type === REMOVE_WALLET) {
        window.localStorage.removeItem('addresses');
        window.localStorage.removeItem('wallets');
    }
  
    next(action);
  };

function isPromise(v) {
    return v && typeof v.then === 'function';
};

export { promiseMiddleware, localStorageMiddleware }