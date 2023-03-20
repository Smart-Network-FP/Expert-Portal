import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the onboarding state domain
 */

const selectOnboardingDomain = state => state.onboarding || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Onboarding
 */

const makeSelectOnboarding = () =>
  createSelector(
    selectOnboardingDomain,
    substate => substate,
  );

export default makeSelectOnboarding;
export { selectOnboardingDomain };
