import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';
import ProtectedRoute from './containers/ProtectedRoute';

import { Routes } from './constants';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store';

export default () => (
  <div className="App">
    <ConnectedRouter history={history}>
      <Switch>
        <ProtectedRoute path={Routes.Settings} component={Settings} />
        <Route path={Routes.Dashboard} exact={true} component={Dashboard} />
        <Route path={Routes.Login} exact={true} component={Login} />
      </Switch>
    </ConnectedRouter>
  </div>
);
