import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/utils/student-service/student.service';
import { StudentData } from '../model/students-model';
import {NzSkeletonAvatarShape,NzSkeletonAvatarSize,NzSkeletonInputSize} from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  quatity:any
  formValue!: FormGroup
  students:any
  studentModel= new StudentData();
  isAddStudentVisible = false;
  isUpdateStudentVisible = false;

  constructor(private studentservice:StudentService,private fb:FormBuilder,private router:Router) { }


  loadSkeleton : boolean = true
  avatarShape : NzSkeletonAvatarShape="square"
  avatarSize : NzSkeletonAvatarSize ="default"
  inputSize: NzSkeletonInputSize = "default"


  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: ['',Validators.required],
      subject: ['',Validators.required],
      grade: ['',Validators.required],
    })
    this.getStudents()
    this.studentservice.isLogout(false)
  }
  getStudents(){
    this.studentservice.getStudents().subscribe(res=>{
      this.students=res;
      this.quatity=this.students.length 
      this.loadSkeleton=false
    })
    
  }

  deleteStudent(id:any){
    this.studentservice.deleteStudent(id).subscribe(res=>{
      alert("Deleted Successfully")
      this.getStudents();
    })
  }

  logout(){
    this.studentservice.isLogin(false)
    this.studentservice.isLogout(true)
    this.router.navigateByUrl("")
  }

  showAddStudent(): void {
    this.formValue.reset()
    this.router.navigateByUrl('crud/addstudent')
  }
  showEditStudent(id:any): void {
    this.formValue.reset()
    this.router.navigateByUrl('crud/editstudent/'+id)
  }

  confirm(id:any){
    this.deleteStudent(id)
  }
  cancel(){

  }

  call(){
  }


}

