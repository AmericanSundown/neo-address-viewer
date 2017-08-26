import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promiseMiddleWare from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
    return applyMiddleware(promiseMiddleWare);
}

const store = createStore(reducer, composeWithDevTools(getMiddleware()))

export default store;