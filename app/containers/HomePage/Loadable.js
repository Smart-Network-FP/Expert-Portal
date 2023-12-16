/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import loadable from 'utils/loadable';

export default loadable(() => import('./index.js'), {
  fallback: <LoadingIndicator />,
});
