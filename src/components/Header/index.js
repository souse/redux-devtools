import React, { Component, PropTypes } from 'react';

import './index.less';

class Header extends Component {
  
  	constructor(props) {
      	super(props);
    }

    render() {
      	return (
      		<div className="app-header">
	      		这是头部信息
	      	</div>
      	)  
    } 
}

export default Header;