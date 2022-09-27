import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from '../utils/dashborad-guard/dashboard.guard';
import { AutheticationComponent } from './authetication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path: '', component: AutheticationComponent },
  { path:'login',component:LoginComponent,canActivate:[DashboardGuard]},
  { path:'login/register',component:RegisterComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutheticationRoutingModule { }
