import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/utils/student-service/student.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router:Router,private studentService:StudentService,private formBuilder:FormBuilder) { 
  }

  validateForm!:FormGroup

  ngOnInit(): void {
    this.studentService.isLogout(true)
    this.validateForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login(){
    this.studentService.isLogin(true);
    this.router.navigateByUrl('crud/dashboard')
  }

  

  


}
