import {
  authSelector,
  isAuthenticatedSelector,
} from './../store/auth/auth.selectors';
import { logOut, loginAttempt } from '../store/auth/auth.actions';
import { Injectable, inject } from '@angular/core';
import { authPayload } from '../models/auth.types';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private store = inject(Store);
  public isAuthenticated$ = this.store.select(isAuthenticatedSelector);
  public authState$ = this.store.select(authSelector);

  attemptToLogin(authPayload: authPayload) {
    this.store.dispatch(loginAttempt(authPayload));
  }
  attemptToLogOut() {
    this.store.dispatch(logOut());
  }
}
