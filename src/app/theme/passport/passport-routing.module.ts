import { LockComponent } from './passport/lock/lock.component';
import { LayoutPassportComponent } from './passport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './passport/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: '',
        component: UserLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassportRoutingModule { }

export const routedComponents = [LayoutPassportComponent, UserLoginComponent, LockComponent];
