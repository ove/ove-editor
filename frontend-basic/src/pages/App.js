import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import PropTypes from 'prop-types'

import AlertContainer from '../containers/AlertContainer'

import {MENU_DEFINITION as menu} from '../data/menuConfig'

const Routes = ({menu}) => (
    <Router>
        <Switch>
            {menu.filter(elem => !elem.external).map(elem => {
                return <Route key={elem.href} exact={elem.exact} path={elem.href} component={elem.component}/>
            })}
        </Switch>
    </Router>
);

Routes.propTypes = {
    menu: PropTypes.array.isRequired
};

const App = ({store}) => (
    <Provider store={store}>
        <div className='container-fluid'>
            <AlertContainer/>
            {/*<NavigationBar menu={menu} hashRouter={false}/>*/}
            <Routes menu={menu}/>
        </div>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App
