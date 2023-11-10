import { authActionTypes, loginFailed, loginSuccess } from './auth.actions';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class AuthEffects {
  private messageService = inject(MessageService);
  private apiService = inject(ApiService);
  private uiService = inject(UiService);
  private actions$ = inject(Actions);
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
          console.log(this.messageService);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login Successful!',
          });
          console.log('DONE');
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
