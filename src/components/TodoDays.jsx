import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoDays extends Component {
	constructor() {
		super();

		this.state = {

		}
	}

	render() {
		console.log(this.props.months);

		return (
			<div>
				<h1>OUR TODO DAYS</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		months: state.months.todoDays
	}
}

export default connect(mapStateToProps, null)(TodoDays)