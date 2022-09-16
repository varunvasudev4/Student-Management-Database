import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../utils/login-guard/login.guard';
import { AddStudentComponent } from './add-student/add-student.component';
import { CrudComponent } from './crud.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  { path: 'dashboard',component:StudentDashboardComponent,canActivate:[LoginGuard]},
  { path: 'addstudent',component:AddStudentComponent,canActivate:[LoginGuard]} ,
  { path: 'editstudent/:id',component:EditStudentComponent,canActivate:[LoginGuard]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
