import {
  logOut,
  loginAttempt,
  loginFailed,
  loginSuccess,
} from './auth.actions';
import { createReducer, on } from '@ngrx/store';

export interface authState {
  token: string;
  isLoading: boolean;
  errorMessage: string;
}

export const authInitialState: authState = {
  token: '',
  isLoading: false,
  errorMessage: '',
};

export const authReducer = createReducer(
  authInitialState,
  on(loginAttempt, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loginSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
    errorMessage: '',
    token: payload.token,
  })),
  on(loginFailed, (state) => ({
    ...state,
    isLoading: false,
    errorMessage: state.errorMessage,
  })),
  on(logOut, () => ({
    ...authInitialState,
  }))
);
