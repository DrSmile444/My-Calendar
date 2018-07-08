import React, { Component } from "react";
import Popup from './Popup';
import DayPopup from './DayPopup';

class Day extends Component {
    constructor() {
        super();

        this.state = {
            popupVisibility: false
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        this.setState({
            popupVisibility: !this.state.popupVisibility
        });
    }

    render() {
        const { day } = this.props;
        const { popupVisibility } = this.state;
        const { togglePopup } = this;

        return (
            <div>
                <h3 onClick={togglePopup}>{day}</h3>
                <Popup visibility={popupVisibility}>
                    <DayPopup date={day} />
                </Popup>
            </div>
        );
    }
}

export default Day;
