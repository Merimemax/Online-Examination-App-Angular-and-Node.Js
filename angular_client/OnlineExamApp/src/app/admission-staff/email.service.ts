import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendExamEmailAdress(email) { // sending email address to node 
    console.log("email will be sent to " + email)
    let emailadress ={"email": email};

    const url = 'http://localhost:8000/email'

    const headers = new HttpHeaders()
      .set('Content-Type', 'Text');

    this.http.post(url, email, {
      headers: headers
    }).subscribe(data => {
      console.log("after saving exam :" + data);
    });
  }
}
