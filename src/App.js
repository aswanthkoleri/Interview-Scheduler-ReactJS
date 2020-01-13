import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Navbar from './components/Navbar'
import List from './components/List'
import Show from './components/Show'
import Edit from './components/Edit'
import {connect} from 'react-redux' 
// import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';
// import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {

componentWillMount=()=>{
        fetch('http://localhost:3001/api/v1/interviews')
    .then(results => {
      return results.json();
    }).then(data => {
        this.props.getAllInterviews(data);
    })
    
}

render(){
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={Create} />
          <Route path='/list' component={List} />
          <Route path ='/show/:id' component={Show} />
          <Route path ='/edit/:id' component={Edit} />
        </div>
      </BrowserRouter>
  );
  }
}
const mapStateToProps=(state) => {
  return {
    
  }
}
const mapDispatchToProps=(dispatch) => {
  return {
    getAllInterviews: (interviews)=>{ dispatch({type : 'GET_ALL_INTERVIEWS',data : interviews}) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
