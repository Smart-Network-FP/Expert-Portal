/**
 *
 * SummaryPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SummaryPage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SummaryPage.propTypes = {};

export default memo(SummaryPage);
