let styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: 10,
    width: "100px",
    height: "100px"
  },
  date: {
    fontSize: "20px",
    margin: 0
  },
  title: {
    margin: 0
  },
  task: {
    margin: 0
  }
};

export default styles;

// // // // // // // //
// //  OneDay.js  // //
// // // // // // // //

// render() {
//   const { title, number, task, color } = this.props.day;
//   return (
//     <div style={styles.div}>
//       <h1 style={styles.title}>{title}</h1>
//       <p style={styles.date}>{number}</p>
//       <p style={styles.task}>Task is: {task}</p>
//     </div>
//   );
// }
