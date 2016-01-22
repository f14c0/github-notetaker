/*jshint esnext: true */

import  React from 'react';
import  Router from 'react-router';
import { Route , IndexRoute } from 'react-router';
import  Main from '../components/Main';
import  Home from '../components/Home';
import  Profile from '../components/Profile';


//ar Route = Router.Route;
//var IndexRoute = Router.IndexRoute;

export default (
  <Route path = "/" component={Main}>
    <Route path = "profile/:username" component={Profile}/>
    <IndexRoute component={Home}/>  // IndexRoute is matched if none routes
  </Route>
);
