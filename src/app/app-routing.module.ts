import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';




// Application main routes
const routes: Routes = [
  { path: 'login'       , component: LoginComponent       },
  { path: 'register'    , component: RegisterComponent    },
  { path: '**'          , component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
