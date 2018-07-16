import React, { Component } from "react";
import { connect } from "react-redux";
import { setDayData } from "../store/actions/MonthAction";

class DayPopup extends Component {
  constructor() {
    super();

    this.state = {
      selectedColor: "none",
      title: "",
      text: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._setDayData = this._setDayData.bind(this);
  }

  _handleChange(val, prop) {
    this.setState({
      [prop]: val
    });
  }

  _setDayData() {
    this.props.setDayData({
      color: this.state.selectedColor,
      title: this.state.title,
      text: this.state.text,
      dayId: this.props.dayId
    });
  }

  render() {
    const { _handleChange, _setDayData } = this;
    const { selectedColor } = this.state;

    return (
      <div className="day-component">
        <input
          type="text"
          placeholder="Title"
          onChange={e => _handleChange(e.target.value, "title")}
        />
        <textarea
          type="text"
          placeholder="Todo"
          onChange={e => _handleChange(e.target.value, "text")}
        />
        <select
          name="todo-color"
          id="todo-color"
          value={selectedColor}
          onChange={e => _handleChange(e.target.value, "selectedColor")}
        >
          <option value="none">None</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <button onClick={_setDayData}>Update</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDayData(data) {
      dispatch(setDayData(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DayPopup);
