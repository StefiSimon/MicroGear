import ReactDOM from 'react-dom';
import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './containers/App';
import Header from './containers/header/Header';
import MainView from './containers/MainView';

import 'jquery';
import './styling/main.scss';
import './font-awesome-4.7.0/scss/font-awesome.scss';

const routes = (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Header}/>
          <Route path="/home" component={MainView} />
        </Route>
      </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
