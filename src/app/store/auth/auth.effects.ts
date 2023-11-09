import { authActionTypes, loginFailed, loginSuccess } from './auth.actions';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);
  private uiService = inject(UiService);
  private router = inject(Router);

  attemptToLoginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActionTypes.LOGIN_ATTEMPT),
      switchMap(() => {
        return this.apiService.login().pipe(
          map((apiCredentials: { token: string }) => {
            return loginSuccess({ token: apiCredentials.token });
          }),
          catchError(() => {
            return of(loginFailed({ errorMessage: 'UNKNOWN ERROR' }));
          })
        );
      })
    )
  );

  loginSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActionTypes.LOGIN_SUCCESS),
        tap(() => {
          this.router.navigate(['/home']);
        })
      ),
    {
      dispatch: false,
    }
  );
  logOutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActionTypes.LOG_OUT),
        tap(() => {
          this.uiService.closeSideNav();
          this.router.navigate(['/login']);
        })
      ),
    {
      dispatch: false,
    }
  );
}
