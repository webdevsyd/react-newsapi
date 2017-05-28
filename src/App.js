import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import DefaultLayout from './containers/layouts/DefaultLayout';
import HomePage from './containers/pages/HomePage';
import NewsPage from './containers/pages/NewsPage';

class App extends Component {
	render() {
		return (
			<Switch>
				<DefaultLayout>
					<Route exact path="/" component={HomePage}/>
					<Route path="/news/:sources" component={NewsPage}/>
				</DefaultLayout>
			</Switch>
		);
	}
}

export default App;