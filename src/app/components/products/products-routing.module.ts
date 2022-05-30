import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'products/:id', component: DetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
