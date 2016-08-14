import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, browserHistory } from 'react-router';

import store from './store';
import Login from './components/Login';
import Logout from './components/Logout';
import Main from './components/Main';

const authRequired = (nextState, replace) => {
  if (!store.authenticated) replace('/login');
};

ReactDOM.render(
  <Provider store={store} router={browserHistory}>
    <Router history={browserHistory}>
        <Route path="/"
          onEnter={authRequired}
          component={Main}/>
        <Route
          path="/login"
          component={Login}/>
        <Route
          path="/logout"
          onEnter={authRequired}
          component={Logout}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
