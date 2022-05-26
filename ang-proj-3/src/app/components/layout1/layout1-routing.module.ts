import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from '../layout1/layout1.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [
  {path: '', component: Layout1Component, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout1RoutingModule { }
