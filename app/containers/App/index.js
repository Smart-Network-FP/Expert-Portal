/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';
import Onboarding from 'containers/Onboarding/Loadable';
import { Helmet } from 'react-helmet';
import { createBrowserHistory } from 'history';
import GlobalStyle from '../../global-styles';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - SMART NETWORK" defaultTitle="SMART NETWORK">
        <meta name="description" content="A SMART NETWORK application" />
      </Helmet>
      <Router history={createBrowserHistory}>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path={['/login', '/signup']}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Route>
          <Route path="/onboarding" component={Onboarding} />
          <Route exact path={['/home', '/dashboard']}>
            <div>
              <Switch>
                <Route path="/home" component={HomePage} />
                {/* <Route path="/dashboard" component={FeaturePage} /> */}
              </Switch>
            </div>
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}
