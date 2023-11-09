import { createAction, props } from '@ngrx/store';

export enum authActionTypes {
  LOGIN_ATTEMPT = '[AUTH] LOGIN ATTEMPT',
  LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS',
  LOGIN_FAILED = '[AUTH] LOGIN FAILED',
  LOG_OUT = '[AUTH] LOG OUT',
}

export const loginAttempt = createAction(
  authActionTypes.LOGIN_ATTEMPT,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  authActionTypes.LOGIN_SUCCESS,
  props<{ token: string }>()
);
export const loginFailed = createAction(
  authActionTypes.LOGIN_FAILED,
  props<{ errorMessage: string }>()
);
export const logOut = createAction(authActionTypes.LOG_OUT);
