import React, { Component } from 'react'
import {connect} from 'react-redux';


class Show extends Component{
   
  render() { 
      
    if( !this.props.interview){
        return (<div>Loading . . . </div>)
    }
    else{
    const jsx = (
        <div>
           {/* <h1>Interview is shown here</h1>  */}
           <h2> Title : {this.props.interview.title}</h2>
           <h3> Date : {this.props.interview.date}</h3>
           <h3> Start time : {this.props.interview.start}</h3>
           <h3> End time : {this.props.interview.end} </h3>
            <h3> Participants : </h3>
            <ul>
                {this.props.interview.participants.map((par) => {return ( <li key={par.id} >{par.email}</li>)})}
            </ul>
            
        </div>
      );
      return jsx;
    }
  }
}



const mapStateToProps=(state,ownProps) => {
    let {id}= ownProps.match.params;
    // console.log(id);
    // console.log(state.interviews.find(interview => interview.id.toString() === id))
    return {
        interview : state.interviews.find(interview => interview.id.toString() === id.toString())
    }
}


export default connect(mapStateToProps)(Show)
