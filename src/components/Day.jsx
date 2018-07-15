import React, { Component } from "react";
import Popup from "./Popup";
import DayPopup from "./DayPopup";
import { connect } from 'react-redux'

class Day extends Component {
    constructor() {
        super();

        this.state = {
            popupVisibility: false
        };

        this._togglePopup = this._togglePopup.bind(this);
        this._handlePopupClose = this._handlePopupClose.bind(this);
    }

    _togglePopup() {
        this.setState({
            popupVisibility: !this.state.popupVisibility
        });
    }

    _handlePopupClose() {
        this.setState({
            popupVisibility: false
        });
    }

    render() {
        const { day } = this.props;
        const { popupVisibility } = this.state;
        const { _togglePopup, _handlePopupClose } = this;

        return (
            <div className="day-card" style={{ backgroundColor: day.color === 'none' ? 'transparent' : day.color }}>
                <h3 onClick={_togglePopup}>{day.date}</h3>
                <Popup
                    visibility={popupVisibility}
                    onClose={_handlePopupClose}
                    index={this.props.index}
                    title={`Day - ${day.date}`}
                >
                    <DayPopup date={day} dayId={this.props.index} />
                </Popup>
            </div>
        );
    }
}

export default connect(null, null)(Day);
