import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import InterviewStore from "./stores/InterviewStore";

ReactDOM.render(
  <Provider InterviewStore={InterviewStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
