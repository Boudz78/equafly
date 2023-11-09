import { createSelector } from '@ngrx/store';
import { authState } from './auth.reducer';
import { AppState } from '../app.state';

export const authSelector = (state: AppState) => state.auth;

export const isAuthenticatedSelector = createSelector(
  authSelector,
  (state: authState) => !!state.token
);
