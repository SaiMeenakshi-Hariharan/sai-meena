import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListModule } from './list/list.module';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    CartComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ListModule
  ]
})
export class ProductsModule { }

