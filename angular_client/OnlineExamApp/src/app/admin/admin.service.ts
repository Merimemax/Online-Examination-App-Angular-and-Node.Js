import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  private request(exam): void {

    const url = 'http://localhost:8000/exam';
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post(url, JSON.stringify(exam), {
      headers: headers
    })
      .subscribe(data => {
        console.log("after saving exam :" + data);
      });
  }
  public createExam(exam: Exam): boolean {
    this.request(exam);
    return true;
  }
}
export interface Exam {

  title: String,
  question: String,
  examnumber: Number

}