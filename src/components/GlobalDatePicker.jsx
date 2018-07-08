import React, { Component } from 'react';

// Date Picker Library
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Redux connections
import { connect } from 'react-redux';
import { addDay } from '../store/actions/MonthAction';
 
class GlobalDatePicker extends Component {
	constructor () {
		super();

		this.state = {
  			startDate: moment()
		};

		this.handleChange = this.handleChange.bind(this);
	}
 
	handleChange(date) {
		const dateFormatted = date.format('YYYY/MMMM/DD');

    	this.setState({
  			startDate: date
		});

		this.props.addDay(dateFormatted);
	}

	render() {
		return (
			<div>
	        	<DatePicker
	        	    selected={this.state.startDate}
	    	        onChange={this.handleChange}
		        />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		months: state.months.todoDays
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addDay(date) {
			return dispatch(addDay(date))
		}
	}
}

export default connect(
	mapStateToProps,
 	mapDispatchToProps
)(GlobalDatePicker);