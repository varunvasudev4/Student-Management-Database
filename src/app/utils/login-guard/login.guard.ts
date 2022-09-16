import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StudentService } from '../student-service/student.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private studentService:StudentService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(!JSON.parse(localStorage.getItem('isLogin') || "")){
      this.router.navigateByUrl("")
    }
    return JSON.parse(localStorage.getItem('isLogin') || "")
  }
  
}
