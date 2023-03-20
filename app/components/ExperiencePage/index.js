/**
 *
 * ExperiencePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ExperiencePage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ExperiencePage.propTypes = {};

export default memo(ExperiencePage);
