import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages/pages.component';
import { MediaComponent } from './pages/media/media.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate:
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];
