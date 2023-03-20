/*
 * TopWrapper Messages
 *
 * This contains all the text for the TopWrapper component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TopWrapper';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TopWrapper component!',
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage: 'Made with ❤️ by {author}',
  },
  author: {
    id: `${scope}.footer`,
    defaultMessage: '<a href="https://github.com/habeebahmed">Habeeb Ahmed</a>',
  },
});
