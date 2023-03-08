/* eslint-disable react/prop-types */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import Signup from 'containers/Signup/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { createBrowserHistory } from 'history';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  function AuthLayout(props) {
    return (
      <>
        <h1>SMART NETWORK</h1>
        {props.children}
      </>
    );
  }
  const SiteLayout = props => (
    <>
      <h1>SMART NETWORK</h1>
      {props.children}
    </>
  );
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - SMART NETWORK" defaultTitle="SMART NETWORK">
        <meta name="description" content="A SMART NETWORK application" />
      </Helmet>
      {/* <Header /> */}
      <Router history={createBrowserHistory}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path={['/login', '/signup']}>
            <AuthLayout>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </AuthLayout>
          </Route>
          <Route exact path={['/home', '/dashboard']}>
            <SiteLayout>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/dashboard" component={FeaturePage} />
              </Switch>
            </SiteLayout>
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
