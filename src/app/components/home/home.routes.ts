import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriasComponent } from '../categorias/categorias.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
      {
        path: '**',
        redirectTo: 'categorias',
      },
    ],
  },
];
