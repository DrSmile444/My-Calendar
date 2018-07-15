import React, { Component } from "react";
import Popup from './Popup';
import DayPopup from './DayPopup';

class Day extends Component {
    constructor() {
        super();

        this.state = {
            popupVisibility: false
        }

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
        })
    }

    render() {
        const { day } = this.props;
        const { popupVisibility } = this.state;
        const { _togglePopup, _handlePopupClose} = this;

        return (
            <div>
                <h3 onClick={_togglePopup}>{day.title}</h3>
                <Popup visibility={popupVisibility} 
                       onClose={_handlePopupClose}
                       title={`Day - ${day.title}`}
                >
                    <DayPopup date={day} />
                </Popup>
            </div>
        );
    }
}

export default Day;