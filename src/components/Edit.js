import React, { Component } from "react";
import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer
class Edit extends Component {
  updateInterview = e => {
    e.preventDefault();
    const date = e.target.elements.date.value;
    const start = e.target.elements.start.value;
    const end = e.target.elements.end.value;
    const title = e.target.elements.title.value;
    const participants = e.target.elements.participants.value;
    const { id } = this.props.match.params;
    this.props.InterviewStore.editInterview(
      id,
      date,
      start,
      end,
      title,
      participants
    );
  };
  render() {
    const { id } = this.props.match.params;
    const interview = this.props.InterviewStore.interviews.find(
      interview => interview.id.toString() === id.toString()
    );
    if (!interview) {
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
              defaultValue={interview.date}
            ></input>
            <label>Start time</label>
            <input
              type="time"
              name="start"
              className="form-control"
              id="start"
              defaultValue={
                interview.start
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
                interview.end
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
              defaultValue={interview.title}
            ></input>
            <label>Participants</label>
            <input
              type="text"
              name="participants"
              className="form-control"
              id="participants"
              defaultValue={interview.participants.map(x => x.email).join()}
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

export default Edit;
