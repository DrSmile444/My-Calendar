import React, { Component } from "react";

class Day extends Component {
    render() {
        const { day } = this.props;

        return (
        <div>
            <h3>{day}</h3>
        </div>
        );
    }
}

export default Day;
