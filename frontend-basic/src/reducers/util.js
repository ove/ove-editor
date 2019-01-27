import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { shouldLog } from '../data/config'
import createRootReducer from './reducers'

export function setupStore() {
    const history = createBrowserHistory();
    let middleware = [routerMiddleware(history), thunkMiddleware];
    if (shouldLog()) {
        middleware.push(createLogger())
    }

    const rootReducer = createRootReducer(history);
    const persistedReducer = persistReducer({ key: 'root', storage, blacklist: ['alerts'] }, rootReducer);

    let store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));
    let persistor = persistStore(store);

    return { store, history, persistor }
}