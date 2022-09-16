import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/utils/student-service/student.service';
import { StudentData } from '../model/students-model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  formValue!: FormGroup
  studentModel= new StudentData();

  constructor(private studentservice:StudentService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['',Validators.required],
      subject: ['',Validators.required],
      grade: ['',Validators.required],
    })
  }
  addStudent(){
    
    this.studentModel.name = this.formValue.value.name;
    this.studentModel.subject = this.formValue.value.subject;
    this.studentModel.Grade = this.formValue.value.grade;

    this.studentservice.postStudent(this.studentModel).subscribe(res=>{
      alert('Student Record added Successfully')
      this.formValue.reset()
      this.router.navigateByUrl('crud/dashboard')
    },
    err=>{
      alert('Somthing went wrong try again')
    })
    
  }
  onCancel(){
    this.router.navigateByUrl('crud/dashboard')
  }


}
