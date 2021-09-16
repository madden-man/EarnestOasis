import React from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { Home } from '../views/Home';

export const _AppRouter = () =>
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>;

export const AppRouter = withRouter(_AppRouter);