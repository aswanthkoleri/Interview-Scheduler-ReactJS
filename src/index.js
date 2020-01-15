import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer.js';

const store = createStore(rootReducer,applyMiddleware(thunk));
const AppStore = () => (
    <Provider store = {store}> 
<App /> 
</Provider>
);

ReactDOM.render(<AppStore/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
