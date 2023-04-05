/**
 *
 * Onboarding
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Redirect, Route, Switch } from 'react-router-dom';
import NormalLoginForm from 'components/NormalLoginForm';
import DashboardNav from 'components/DashboardNav';
import OnboardingSteps from 'components/OnboardingSteps';
import PersonalPage from 'components/PersonalPage';
import ExperiencePage from 'components/ExperiencePage';
import SummaryPage from 'components/SummaryPage';
import makeSelectOnboarding from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Onboarding() {
  useInjectReducer({ key: 'onboarding', reducer });
  useInjectSaga({ key: 'onboarding', saga });

  return (
    <div>
      <Helmet>
        <title>Onboarding</title>
        <meta name="description" content="Description of Onboarding" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <div>
        <DashboardNav />
        <OnboardingSteps />
      </div>
      <Switch>
        <Route exact path="/onboarding/personal" component={PersonalPage} />
        <Route exact path="/onboarding/experience" component={ExperiencePage} />
        <Route exact path="/onboarding/summary" component={SummaryPage} />
        <Redirect from="/onboarding" to="/onboarding/personal" />
      </Switch>
    </div>
  );
}

Onboarding.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  onboarding: makeSelectOnboarding(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Onboarding);
