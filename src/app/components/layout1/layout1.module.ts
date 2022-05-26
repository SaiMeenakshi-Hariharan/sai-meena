import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout1RoutingModule } from './layout1-routing.module';
import { Layout1Component } from '../layout1/layout1.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderModule } from '../header/header.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    Layout1Component,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    Layout1RoutingModule,
    HeaderModule,
    DashboardModule,
    UserModule
  ]
})
export class Layout1Module { }
