import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import route from '../route';
import DevTools from './DevTools';

export default class Root extends Component {
	render() {
		const { store } = this.props;

		if (!this.route) this.route = route;

		return (
			<Provider store={store}>
				<div>
					<Router routes={this.route} history={hashHistory} />
					<DevTools />
				</div>
			</Provider>
		)
	}
}