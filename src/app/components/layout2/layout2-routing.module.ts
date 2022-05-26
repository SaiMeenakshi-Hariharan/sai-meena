import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout2Component } from '../layout2/layout2.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: '', component: Layout2Component, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout2RoutingModule { }
