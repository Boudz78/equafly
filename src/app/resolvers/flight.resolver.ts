import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { tap } from 'rxjs';

export const flightResolver: ResolveFn<any> = (route) => {
  const router = inject(Router);
  return inject(ApiService)
    .getFlightByID(route.params['id'])
    .pipe(
      tap((result) => {
        if (!result) router.navigate(['/']);
      })
    );
};
