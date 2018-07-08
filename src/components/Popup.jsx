import React, { Component } from 'react';

class Popup extends Component {
    constructor() {
        super()
    }

    checkPopupVisibility(visibility) {
        return { display: visibility ? 'block' : 'none' };
    }

    render() {
        const { visibility, title } = this.props;
        const { checkPopupVisibility } = this

        return (
            <div className="popup" style={checkPopupVisibility(visibility)}>
                <header className="popup-header">
                    <h3>{title || 'Default title'}</h3>
                    <button>Close</button>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Popup;