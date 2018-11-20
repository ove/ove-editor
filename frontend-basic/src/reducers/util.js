import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {shouldLog} from '../data/config'
import rootReducer from './reducers'

export function setupStore() {
    let middleware = [thunkMiddleware];
    if (shouldLog()) {
        middleware.push(createLogger())
    }
    return createStore(rootReducer, applyMiddleware(...middleware));
}
