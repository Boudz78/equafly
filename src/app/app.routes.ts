import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { RadioButtonModule } from 'primeng/radiobutton';
import { flightResolver } from './resolvers/flight.resolver';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./screens/login-screen/login-screen.component').then(
        (x) => x.LoginScreenComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./screens/home-screen/home-screen.component').then(
        (x) => x.HomeScreenComponent
      ),
    providers: [RadioButtonModule],
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./screens/about-screen/about-screen.component').then(
        (x) => x.AboutScreenComponent
      ),
    providers: [RadioButtonModule],
    canActivate: [authGuard],
  },
  {
    path: 'flightDetails/:id',
    loadComponent: () =>
      import('./screens/flight-details/flight-details.component').then(
        (x) => x.FlightDetailsComponent
      ),
    providers: [RadioButtonModule],
    resolve: {
      flightDetails: flightResolver,
    },
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
