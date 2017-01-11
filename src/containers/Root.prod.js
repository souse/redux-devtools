import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import route from '../route';

export default class Root extends Component {
	render() {
		const { store } = this.props;

	    return (
	      	<Provider store={store}>
	        	<Router routes={this.route} history={hashHistory} />
	      	</Provider>
	    );
	}	
}