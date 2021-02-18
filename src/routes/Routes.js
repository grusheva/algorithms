import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './constants';
import Home from '../pages/Home/Home';
import ColoredArray from '../pages/ColoredArray/ColoredArray';
import NotFound from '../pages/NotFound/NotFound';

export const Routes = () => (
  <Switch>
    <Route path={ROUTES.home} component={Home} exact />
    <Route path={ROUTES.coloredArray} component={ColoredArray} exact />
    <Route component={NotFound} />
  </Switch>
);
