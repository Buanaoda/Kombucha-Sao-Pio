/* JMJ */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import About from '../components/About';
import Contact from '../components/Contact';
import DashboardPage from '../components/DashboardPage';
import EditPost from '../components/EditPost';
import HomePage from '../components/HomePage';
import Kombucha from '../components/Kombucha';
import LoginPage from '../components/LoginPage';
import NewPost from '../components/NewPost';
import NotFoundPage from '../components/NotFoundPage';
import Patreon from '../components/Patreon';
import PostItemPage from '../components/PostItemPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/post/:id" component={PostItemPage} />
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PublicRoute path="/about" component={About} exact={true} />
        <PublicRoute path="/contact" component={Contact} exact={true} />
        <PublicRoute path="/kombucha" component={Kombucha} exact={true} />
        <PublicRoute path="/patreon" component={Patreon} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/newpost" component={NewPost} exact={true} />
        <PrivateRoute path="/editpost/:id" component={EditPost} exact={true} />
        <Route component={NotFoundPage} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;