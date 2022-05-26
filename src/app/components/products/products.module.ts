import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

const router = [
  {path: '', component: ListComponent},
  {path: 'products/:id', component: DetailsComponent}
]

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ProductsModule { }
