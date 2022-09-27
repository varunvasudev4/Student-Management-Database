import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const option = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get('http://localhost:3000/students');
  }

  postStudent(data: any) {
    return this.http.post('http://localhost:3000/students', data);
  }

  updateStudent(id: any, data: any) {
    return this.http.put('http://localhost:3000/students/' + id, data);
  }

  deleteStudent(id: any) {
    return this.http.delete<any>('http://localhost:3000/students/' + id);
  }

  getOneStudent(id: any) {
    return this.http.get('http://localhost:3000/students/' + id);
  }
  isLogin(data: any) {
    localStorage.setItem('isLogin', JSON.stringify(data));
  }
  isLogout(data: any) {
    localStorage.setItem('isLogout', JSON.stringify(data));
  }
}
