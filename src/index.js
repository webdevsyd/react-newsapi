import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

/* Redux */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

/* Routes */
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

/* React Material */
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import reducers from './reducers';
import App from './App';

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(
        applyMiddleware(middleware),
		applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
