import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { pushOpenedPopup } from '../store/actions/MonthAction'

class Popup extends Component {
    constructor(props) {
        super(props);

        this.props.onClose()
    }

    _checkPopupVisibility(visibility) {
        return { display: visibility ? 'block' : 'none' };
    }

    render() {
        const { visibility, title } = this.props;
        const { _checkPopupVisibility } = this;

        return (
            <div ref="popup" className="popup" style={_checkPopupVisibility(visibility)}>
                <header className="popup-header">
                    <h3 className="popup-header__title">{title || 'Default title'}</h3>
                    <button className="popup-header__close-btn" onClick={() => this.props.onClose()}>Close</button>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default connect(state => {
    return {
        popups: state.months.popups
    }
}, dispatch => {
    return {
        pushOpenedPopup(index) {
            dispatch(pushOpenedPopup(index))
        }
    }
})(Popup);