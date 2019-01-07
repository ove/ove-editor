import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import PropTypes from 'prop-types'

import AlertContainer from '../containers/AlertContainer'

import { MENU_DEFINITION as menu } from '../data/menuConfig'

const Routes = ({ menu }) => (
    <Switch>
        {menu.filter(elem => !elem.external).map(elem => {
            return <Route key={elem.href} exact={elem.exact} path={elem.href} component={elem.component} />
        })}
    </Switch>
);

Routes.propTypes = {
    menu: PropTypes.array.isRequired
};

const App = ({ store, history, persistor }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <div className='container-fluid'>
                    <AlertContainer />
                    {/* <NavigationBar menu={menu} hashRouter={false}/> */}
                    <Routes menu={menu} />
                </div>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    persistor: PropTypes.any.isRequired
};

export default App
