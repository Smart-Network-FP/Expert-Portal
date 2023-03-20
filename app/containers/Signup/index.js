/**
 *
 * Signup
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
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import NormalSignupForm from 'components/NormalSignupForm';
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
const { Title } = Typography;

export function Signup() {
  useInjectReducer({ key: 'signup', reducer });
  useInjectSaga({ key: 'signup', saga });

  return (
    <div>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Description of Signup" />
      </Helmet>
      <section>
        <center>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
        </center>
      </section>
      <section>
        <NormalSignupForm />
      </section>
    </div>
  );
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
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

export default compose(withConnect)(Signup);
