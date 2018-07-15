import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props);
    }

    _checkPopupVisibility(visibility) {
        return { display: visibility ? 'block' : 'none' };
    }

    render() {
        const { visibility, title } = this.props;
        const { _checkPopupVisibility } = this;

        return (
            <div className="popup" style={_checkPopupVisibility(visibility)}>
                <header className="popup-header">
                    <h3 className="popup-header__title">{title || 'Default title'}</h3>
                    <button className="popup-header__close-btn" onClick={() => this.props.onClose()}>Close</button>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Popup;