import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
