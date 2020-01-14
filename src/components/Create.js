import React, { Component } from "react";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
class Create extends Component {
  createInterview = e => {
    e.preventDefault();
    const date = e.target.elements.date.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;
    const title = e.target.elements.title.value;
    const participants = e.target.elements.participants.value;
    let request = new XMLHttpRequest();
    let url = "http://localhost:3001/api/v1/interviews/";
    // open a connection
    request.open("POST", url, true);
    // Set the request header i.e. which type of content you are sending
    request.setRequestHeader("Content-Type", "application/json");
    // Create a state change callback
    request.onreadystatechange = function() {
      console.log("Successful outside");
      if (request.readyState === 4 && request.status === 200) {
        var res = JSON.parse(this.responseText);
        if (res.code == 3000) {
          this.props.newInterview(res);
          console.log("Successful");
          alert("There is an overlap in date and time");
        } else {
          alert("The Interview is created");
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
    //  this.props.newInterview({ "date": date, "start": start, "end": end, "title": title,"participantlist": participants })
  };
  render() {
    const jsx = (
      <div>
        <h2>Create Interview</h2>
        <form id="create-interview" onSubmit={this.createInterview}>
          <label>Interview Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            id="date"
          ></input>
          <label>Start time</label>
          <input
            type="time"
            name="start"
            className="form-control"
            id="start"
          ></input>
          <label>End time</label>
          <input
            type="time"
            name="end"
            className="form-control"
            id="end"
          ></input>
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
          ></input>
          <label>Participants</label>
          <input
            type="text"
            name="participants"
            className="form-control"
            id="participants"
            placeholder="Separate the participant ids by comma"
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

const mapDispatchToProps = dispatch => {
  return {
    newInterview: interview => {
      dispatch({ type: "NEW_INTERVIEW", data: interview });
    }
  };
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
