import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
