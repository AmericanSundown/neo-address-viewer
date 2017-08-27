import {
    ASYNC_START,
    ASYNC_END,
    ADD_WALLET,
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
    if (action.type === ADD_WALLET) {
        if (!action.error) {
            console.log('ACTION', action);
            window.localStorage.setItem('wallet', action.payload);
        }
    } else if (action.type === REMOVE_WALLET) {
        window.localStorage.setItem('wallet', '');
    }
  
    next(action);
  };

function isPromise(v) {
    return v && typeof v.then === 'function';
};

export { promiseMiddleware, localStorageMiddleware }