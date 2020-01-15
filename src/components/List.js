import React, { Component } from "react";
import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer
class List extends Component {
  deleteInterview = id => {
    this.props.InterviewStore.deleteInterview(id);
    alert("Delete Successful");
  };
  render() {
    const jsx = (
      <div>
        <h1> Interviews Scheduled</h1>
        {this.props.InterviewStore.interviews.map(interview => (
          <div key={interview.id}>
            <h3>{interview.title}</h3>
            <ul>
              <li>Date : {interview.date}</li>
              <li>Start Time : {interview.start}</li>
              <li>End Time : {interview.end}</li>
              <a href={"/show/" + interview.id}>Show</a>{" "}
              <a href={"/edit/" + interview.id}>Edit</a>{" "}
              <a
                href=""
                onClick={this.deleteInterview.bind(this, interview.id)}
              >
                Delete
              </a>
            </ul>
          </div>
        ))}
      </div>
    );
    return jsx;
  }
}

export default List;
// export default List
