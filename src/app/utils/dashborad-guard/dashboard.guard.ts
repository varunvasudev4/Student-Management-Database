import { StudentService } from 'src/app/utils/student-service/student.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private studentService:StudentService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!JSON.parse(localStorage.getItem('isLogout') || "")){
        this.router.navigateByUrl("crud/dashboard")
      }
      return JSON.parse(localStorage.getItem('isLogout') || "")
  }
  
}
