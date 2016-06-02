import React, { Component } from 'react';

import Footer from '../footer/Footer';

class Section extends Component{
	render() {
		return(
			<div className="container">
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default Section;