import React, { Component, PropTypes } from 'react';

import './index.less';

class Main extends Component {

  	constructor(props) {
      	super(props);
    }

    componentDidMount() {
      console.log(this.props);      
    }

    render() {
    	return (
    		<div className="main">
	      		主页内容	
	      	</div>
    	)  
    } 
}

export default Main;