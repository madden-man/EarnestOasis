import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ExistentialSurvey } from '../views/ExistentialSurvey';
import { Home } from '../views/Home';
import { Calendar } from '../views/Calendar';
import { QueueThatSong } from '../views/QueueThatSong';

export const AppRouter = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/music-party" component={QueueThatSong} />
    <Route component={ExistentialSurvey} />
  </Switch>;
