import React, { Component } from "react";
import { inject, observer } from "mobx-react";
@inject("InterviewStore")
@observer
class Show extends Component {
  render() {
    const { id } = this.props.match.params;
    const interview = this.props.InterviewStore.interviews.find(
      interview => interview.id.toString() === id.toString()
    );
    if (!interview) {
      return <div>Loading . . . </div>;
    } else {
      const jsx = (
        <div>
          {/* <h1>Interview is shown here</h1>  */}
          <h2> Title : {interview.title}</h2>
          <h3> Date : {interview.date}</h3>
          <h3> Start time : {interview.start}</h3>
          <h3> End time : {interview.end} </h3>
          <h3> Participants : </h3>
          <ul>
            {interview.participants.map(par => {
              return <li key={par.id}>{par.email}</li>;
            })}
          </ul>
        </div>
      );
      return jsx;
    }
  }
}

export default Show;
