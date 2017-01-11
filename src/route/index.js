import React, { Component } from 'react';
import { Route, IndexRedirect } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import App from '../views/App';
import Main from '../views/Main';

const routes = (
	<Route path="/">
		<IndexRedirect to='/main' />
		<Route component={App}>
			<Route path='/main' component={Main}/>
		</Route>
	</Route>
);

export default routes;