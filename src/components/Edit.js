import React, { Component } from "react";
import { connect } from "react-redux";
class Edit extends Component {
  updateInterview = e => {
    e.preventDefault();
    console.log("interview updated");
    const date = e.target.elements.date.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;
    const title = e.target.elements.title.value;
    const participants = e.target.elements.participants.value;
    let request = new XMLHttpRequest();
    const { id } = this.props.match.params;
    let url = "http://localhost:3001/api/v1/interviews/" + id;
    // open a connection
    request.open("PUT", url, true);
    // Set the request header i.e. which type of content you are sending
    request.setRequestHeader("Content-Type", "application/json");
    // Create a state change callback
    request.onreadystatechange = function() {
      // console.log("Successful outside");
      if (request.readyState === 4 && request.status === 200) {
        var res = JSON.parse(this.responseText);

        if (res.code === 3000) {
          console.log("Successful");
          this.props.editInterview(res);
          alert("There is an overlap in date and time");
        } else {
          alert("The Interview is updated");
        }
      }
    };
    // Converting JSON data to string
    var data = JSON.stringify({
      date: date,
      start: start,
      end: end,
      title: title,
      participantlist: participants
    });
    // Sending data with the request
    request.send(data);
  };
  render() {
    if (!this.props.interview) {
      return <div> Loading ... </div>;
    } else {
      const jsx = (
        <div>
          <h2>Update interview</h2>
          <form id="create-interview" onSubmit={this.updateInterview}>
            <label>Interview Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              id="date"
              defaultValue={this.props.interview.date}
            ></input>
            <label>Start time</label>
            <input
              type="time"
              name="start"
              className="form-control"
              id="start"
              defaultValue={
                this.props.interview.start
                  .split("T")
                  .pop()
                  .split("Z")[0]
              }
            ></input>
            <label>End time</label>
            <input
              type="time"
              name="end"
              className="form-control"
              id="end"
              defaultValue={
                this.props.interview.end
                  .split("T")
                  .pop()
                  .split("Z")[0]
              }
            ></input>
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              defaultValue={this.props.interview.title}
            ></input>
            <label>Participants</label>
            <input
              type="text"
              name="participants"
              className="form-control"
              id="participants"
              defaultValue={this.props.interview.participants
                .map(x => x.email)
                .join()}
            ></input>
            <button type="submit" name="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
      return jsx;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editInterview: interview => {
      dispatch({ type: "EDIT_INTERVIEW", data: interview });
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  let { id } = ownProps.match.params;
  // console.log(id);
  console.log(
    state.interviews.find(interview => interview.id.toString() === id)
  );
  return {
    interview: state.interviews.find(
      interview => interview.id.toString() === id
    )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
