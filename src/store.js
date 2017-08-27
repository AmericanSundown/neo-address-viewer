import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
}

const store = createStore(reducer, composeWithDevTools(getMiddleware()))

export default store;