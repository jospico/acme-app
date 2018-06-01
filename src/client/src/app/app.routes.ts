import { Routes } from '@angular/router';
import { HomeComponent } from  './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CallbackComponent } from './components/callback/callback.component';
import { OeeComponent } from './components/oee/oee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'oee', component: OeeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];