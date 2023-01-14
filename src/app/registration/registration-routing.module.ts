import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [{ path: '', component: RegistrationComponent }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }, { path: 'forgot', loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule) }, { path: 'otp', loadChildren: () => import('./otp/otp.module').then(m => m.OtpModule) }, { path: 'reset', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
