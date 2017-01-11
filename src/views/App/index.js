import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/Header';

import * as userOperate from '../../actions/user';

import './index.less';

class App extends Component {
	
	constructor(props) {
    	super(props);
  	}

  	render() {
  		const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
	       	...this.props
	    }));

      	return (
	        <div className="app-container">
	          	<Header {...this.props} />
	          	<div className="app-main">
	           		{ childrenWithProps }
	           		{/** 代替了 this.props.children 还可以传递 App的所有props到子View **/}
	          	</div>
	        </div>  
      	)
  	}	
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userOperate, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);