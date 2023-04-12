/**
 *
 * DashboardNav
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DashboardNav() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DashboardNav.propTypes = {};

export default memo(DashboardNav);
