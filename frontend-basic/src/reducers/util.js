import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { shouldLog } from '../data/config'
import createRootReducer from './reducers'

export function setupStore() {
    const history = createBrowserHistory();
    let middleware = [routerMiddleware(history), thunkMiddleware];
    if (shouldLog()) {
        middleware.push(createLogger())
    }
    return { store: createStore(createRootReducer(history), compose(applyMiddleware(...middleware))), history }
}
