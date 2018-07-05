import React from "react";
// import styles from "./styles";
import "./style.css";

class OneDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        background: this.props.day.background,
        color: this.props.day.color
      }
    };
  }

  truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 3) + "..." : str;
  }

  render() {
    let { title, date, task, color } = this.props.day;

    task === undefined ? (task = "") : (task = this.truncate(task, 20));

    return (
      <div className="day" style={this.state.style}>
        <h1 className="title">{title}</h1>
        <hr className="line" style={{ borderColor: color }} />
        <div>
          <p className="date">{date.day}</p>
          <p className="month">{date.month}</p>
        </div>
        <p className="task">{task}</p>
      </div>
    );
  }
}

export default OneDay;
