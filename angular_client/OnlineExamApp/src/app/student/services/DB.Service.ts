import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable()
export class DBService{
    constructor(private http:HttpClient){}
    getQuestion(){
       return  this.http.get('http://localhost:8000/exam');
        
    }
    addStudent(student){
        return  this.http.post('http://localhost:8000/student',student);
         
     }
 
}
