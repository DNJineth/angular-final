import { Routes } from '@angular/router';
import { ListComponent } from './users/list/list';
import { CreateComponent } from './users/create/create';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: ListComponent },
  { path: 'users/create', component: CreateComponent },
  { path: '**', redirectTo: 'users' }
];

