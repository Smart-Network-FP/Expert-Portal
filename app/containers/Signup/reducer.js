/*
 *
 * Signup reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  username: '',
  email: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const signupReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        console.log(draft);
        console.log(state);
        break;
    }
  });

export default signupReducer;
