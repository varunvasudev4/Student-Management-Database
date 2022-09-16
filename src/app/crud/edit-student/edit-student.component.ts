import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/utils/student-service/student.service';
import { StudentData } from '../model/students-model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  formValue!: FormGroup
  studentModel= new StudentData();
  student:any
  pid:any

  constructor(private studentservice:StudentService,
    private formBuilder:FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: ['',Validators.required],
      subject: ['',Validators.required],
      grade: ['',Validators.required],
    })
    this.activatedRoute.params.subscribe((data: any) => {
      this.pid = data['id']
      this.getStudent(this.pid);
    })
  }

  getStudent(id:any){
    this.studentservice.getOneStudent(id).subscribe(res=>{
      this.student=res;
      this.updateGet(this.student) 
    },
    err=>{
      alert('User Not Found')
      this.router.navigateByUrl('crud/dashboard')
    })
  }

  updateGet(student:any){
    this.studentModel.id = student.id
    this.formValue.controls['name'].setValue(student.name)
    this.formValue.controls['subject'].setValue(student.subject)
    this.formValue.controls['grade'].setValue(student.Grade)
  }

  editStudent(){
    this.studentModel.name = this.formValue.value.name;
    this.studentModel.subject = this.formValue.value.subject;
    this.studentModel.Grade = this.formValue.value.grade;
    this.studentservice.updateStudent(this.studentModel.id,this.studentModel).subscribe(res=>{
      alert("Updated Successfully")
  })
    this.onCancel()
  }

 

  onCancel(){
    this.router.navigateByUrl('crud/dashboard')
  }
}
