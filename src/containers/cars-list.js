import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CarsList extends Component {
	render () {
		return  (
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		);	
	}
}

function mapStateToProps(state) {
	return {
		cars: state.cars
	}
}

export default connect(mapStateToProps)(CarsList);