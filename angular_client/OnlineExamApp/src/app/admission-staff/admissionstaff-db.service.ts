import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentModule } from '../student/student.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { Istudent } from './Istudent';


@Injectable({
  providedIn: 'root'
})
export class AdmissionstaffDBService {
//cast observable into an array of students by using the Istudent interface
  stu: Istudent[] = []; 
  constructor(private http: HttpClient) { }// imported in the app module and injected here

  getStudents() {

    const url = 'http://localhost:8000/student' //link to node api
    this.http.get<any>(url) // where we can make api call to node js
      .subscribe((res) => { //since return type is observable we are listening to it
        res.forEach(element => {
          console.log("element " + JSON.stringify(element));// js value to json string
          this.stu.push(element);
        });
      })


    return this.stu;
  }

}