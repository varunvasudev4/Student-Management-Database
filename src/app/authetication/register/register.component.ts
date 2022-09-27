import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  validateForm!:FormGroup

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      email: ['',Validators.required],
      phone: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  signup(){
    this.router.navigateByUrl('');
  }

  toLogin(){
    this.router.navigateByUrl('');
  }

}
