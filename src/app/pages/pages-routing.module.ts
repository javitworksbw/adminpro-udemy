import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';


// Guards
import { LoginGuard } from '../services/service.index';



// Pages routes
const pagesRoutes: Routes = [
  { path: ''                  ,
    component: PagesComponent ,
    canActivate: [ LoginGuard ],
    children: [
      { path: 'dashboard'         , component: DashboardComponent },
      { path: 'progress'          , component: ProgressComponent  },
      { path: 'graficas1'         , component: Graficas1Component },
      { path: 'account-settings'  , component: AccountSettingsComponent },
      { path: 'profile'           , component: ProfileComponent   , data: { title: 'User Profile'}},
      { path: ''                  , redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
