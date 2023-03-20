/**
 *
 * Box
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Box() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Box.propTypes = {};

export default memo(Box);
