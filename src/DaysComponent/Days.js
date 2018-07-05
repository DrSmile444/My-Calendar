import React from "react";
import OneDay from "../OneDayComponent/OneDay";
import "./styles.css";

class Days extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.days);
  }
  render() {
    return (
      <div className="days">
        {this.props.days.map((el, i) => {
          return <OneDay day={el} key={i} />;
        })}
      </div>
    );
  }
}

export default Days;
