import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheticationRoutingModule } from './authetication-routing.module';
import { AutheticationComponent } from './authetication.component';
import { LoginComponent } from './login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    AutheticationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutheticationRoutingModule,
    NzButtonModule
  ]
})
export class AutheticationModule { }
