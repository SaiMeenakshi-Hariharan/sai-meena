import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { DetailsComponent } from '../details/details.component';
import { AuthGuard } from '../../services/auth.guard';
import { RouterModule } from '@angular/router';

const router = [
  {path: '', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'products/:id', component: DetailsComponent, canActivate: [AuthGuard]}
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
