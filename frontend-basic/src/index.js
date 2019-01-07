import React from 'react';
import { render } from 'react-dom'

import App from './pages/App'

import { setupStore } from './reducers/util'
import { setupRestBackend } from './backend/fetchClient'
import { backendRestUrl, browserInfo } from './data/config'

browserInfo();
setupRestBackend(backendRestUrl());
const { store, history, persistor } = setupStore();

render(<App store={store} history={history} persistor={persistor} />, document.getElementById('app'));
