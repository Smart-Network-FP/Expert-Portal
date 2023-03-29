/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';

import PrimaryInput from 'components/PrimaryInput';
import messages from './messages';

export default function HomePage() {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
        <Button type="primary">Primary</Button>
      </h1>
      <PrimaryInput />

    </>
  );
}
