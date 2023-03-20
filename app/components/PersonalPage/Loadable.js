/**
 *
 * Asynchronously loads the component for PersonalPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
