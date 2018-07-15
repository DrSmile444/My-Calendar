import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./Day";

class TodoDays extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>OUR TODO DAYS</h1>
        <div className="days-holder">
          {this.props.months.map((day, i) => {
            return <Day day={day} key={i} index={i} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    months: state.months.todoDays
  };
};

export default connect(
  mapStateToProps,
  null
)(TodoDays);
