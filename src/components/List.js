import React, { Component } from 'react'
import {connect} from 'react-redux';
// import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';

class List extends Component {

  deleteInterview=(id)=> {
    var deleteReq = new XMLHttpRequest();
    deleteReq.open('DELETE','http://localhost:3001/api/v1/interviews/'+id);
    deleteReq.send();
    this.props.deleteInterview(id);
    alert("delete successful");
  }

  render() {
    const jsx = (
      <div>
      <h1> Interviews Scheduled</h1>
        {this.props.interviews.map((interview) => (
          <div key={interview.id}>
            <h3>{interview.title}</h3>
            <ul>
            <li>Date : {interview.date}</li>
            <li>Start Time : {interview.start}</li>
            <li>End Time : {interview.end}</li>
            <a href={"/show/"+interview.id} >Show</a> <a href={"/edit/"+interview.id}>Edit</a> <a href="" onClick={this.deleteInterview.bind(this,interview.id)}>Delete</a>
            </ul>
          </div>
        ))}
    </div>
    )
    return jsx;
  }
}

const mapStateToProps = (state) => {
  return {
    interviews : state.interviews
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    deleteInterview: (id)=>{ dispatch({type : 'DELETE_INTERVIEW',data : id}) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
// export default List