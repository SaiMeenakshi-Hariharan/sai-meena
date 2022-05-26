import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout2RoutingModule } from './layout2-routing.module';
import { Layout2Component } from '../layout2/layout2.component';
import { HeaderModule } from '../header/header.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    Layout2Component
  ],
  imports: [
    CommonModule,
    Layout2RoutingModule,
    HeaderModule,
    DashboardModule,
    UserModule
  ]
})
export class Layout2Module { }
