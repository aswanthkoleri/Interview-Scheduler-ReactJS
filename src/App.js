import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Show from "./components/Show";
import Edit from "./components/Edit";

@inject("InterviewStore")
@observer
class App extends Component {
  componentDidMount = () => {
    this.props.InterviewStore.fetchInterviews();
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/list" component={List} />
          <Route path="/show/:id" component={Show} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
