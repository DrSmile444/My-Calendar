import React from "react";
import Days from "./DaysComponent/Days";
import "./style.css";
import "./fonts.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      days: [
        {
          title: "Sunday",
          date: { day: "1", month: "July" },
          task: "New month :)"
        },
        {
          title: "Monday",
          date: { day: "2", month: "July" },
          task: "Study english",
          background: "#fff573"
        },
        {
          title: "Tuesday",
          date: { day: "3", month: "July" },
          task: "Make Home work",
          background: "#d66"
        },
        {
          title: "Wednesday",
          date: { day: "4", month: "July" },
          task: "Make Home work",
          background: "#93cac4"
        },
        {
          title: "Thursday",
          date: { day: "5", month: "July" }
        },
        {
          title: "Friday",
          date: { day: "6", month: "July" }
        },
        {
          title: "Saturday",
          date: { day: "7", month: "July" }
        },
        {
          title: "Sunday",
          date: { day: "8", month: "July" },
          task: "🎂Serge B-DAY🎂",
          background:
            'url("http://cdn0.wideopeneats.com/wp-content/uploads/2017/02/FreeFoodBirthdayRewardsFI.jpg")'
        },
        {
          title: "Monday",
          date: { day: "9", month: "July" }
        },
        {
          title: "Tuesday",
          date: { day: "10", month: "July" }
        },
        {
          title: "Wednesday",
          date: { day: "11", month: "July" },
          task: "🎂 Birthday 🎂",
          background:
            "url('https://d2zfkpu1r6ym98.cloudfront.net/sites/guideposts.org/files/styles/open_graph/public/blog_post/blog_december_birthday_1540_0.jpg')",
          color: "white"
        },
        {
          title: "Friday",
          date: { day: "12", month: "July" }
        },
        {
          title: "Saturday",
          date: { day: "13", month: "July" }
        }
      ]
    };
  }

  render() {
    return (
      <div id="app">
        <h1 className="calendar">
          <p>My</p>
          {"  "}
          Calendar
        </h1>
        <Days days={this.state.days} />
      </div>
    );
  }
}

export default App;
