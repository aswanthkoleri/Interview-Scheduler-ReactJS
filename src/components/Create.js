import React, { Component } from "react";
import { connect } from "react-redux";
import { createInterviewAction } from "../actions/createInterview";
class Create extends Component {
  createInterview = e => {
    e.preventDefault();
    const date = e.target.elements.date.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;
    const title = e.target.elements.title.value;
    const participants = e.target.elements.participants.value;
    this.props.dispatch(
      createInterviewAction(date, start, end, title, participants)
    );
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
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(Create);
