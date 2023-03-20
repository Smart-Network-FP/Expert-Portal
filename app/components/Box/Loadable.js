/**
 *
 * Asynchronously loads the component for Box
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
