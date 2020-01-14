import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Navbar from './components/Navbar'
import List from './components/List'
import Show from './components/Show'
import Edit from './components/Edit'
import {connect} from 'react-redux' 
import { getInterviews } from './actions/getInterviews'

class App extends Component {

componentWillMount=()=>{
        this.props.dispatch(getInterviews())
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
export default connect(mapStateToProps)(App);
