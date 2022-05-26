import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path: 'layout1', loadChildren: () => import('./components/layout1/layout1.module').then(m => m.Layout1Module), canActivate: [AuthGuard]},
  {path: 'layout2', loadChildren: () => import('./components/layout2/layout2.module').then(m => m.Layout2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
