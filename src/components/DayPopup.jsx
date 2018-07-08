import React, { Component } from 'react';

class DayPopup extends Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="day-component">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Todo" />
                <select name="todo-color" id="todo-color">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
            </div>
        )
    }
}

export default DayPopup;