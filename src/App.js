import React from "react";

// Components
import GlobalDatePicker from "./components/GlobalDatePicker";
import TodoDays from "./components/TodoDays";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="app">
        <GlobalDatePicker />
        <TodoDays />
      </div>
    );
  }
}

export default App;
