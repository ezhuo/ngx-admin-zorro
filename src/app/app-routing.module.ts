import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/data/auth-guard.service';
import { environment } from '@env/environment';

const routes: Routes = [
  {
    path: 'app',
    canLoad: [AuthGuard],
    loadChildren: './pages/pages.module#PagesModule',
    data: { app: true }
  },
  // 全屏布局
  {
    path: 'data-v',
    loadChildren: './pages/data-v/data-v.module#DataVModule'
  },
  // passport
  {
    path: 'passport',
    loadChildren: './theme/passport/passport.module#PassportModule',
  },
  // passport
  {
    path: 'exception',
    loadChildren: './theme/exception/exception.module#ExceptionModule',
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app' },
];

const config: ExtraOptions = { useHash: environment.useHash };

export const routedComponents = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: [...routedComponents]
})
export class AppRoutingModule { }
