import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/utils/student-service/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.isLogout(true)
  }

  toStudentDashboard(){
    this.studentService.isLogin(true);
    this.router.navigateByUrl('crud/dashboard')
  }

}
