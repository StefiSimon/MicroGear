
import ReactDOM from 'react-dom';
import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Header from './components/Header';
import MainView from './components/MainView';

import 'jquery';

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
