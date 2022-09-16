import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UtilsComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    HttpClientModule
  ]
})
export class UtilsModule { }
