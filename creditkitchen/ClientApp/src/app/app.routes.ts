import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { path: '', loadChildren: './main/main.module#MainModule' },
  { path: '**', redirectTo: '' }
];

