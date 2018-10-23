import { Component, OnInit } from '@angular/core';
import { staffService } from '../admission.service';
import { Istudent } from '../Istudent';

@Component({
  selector: 'app-admissionhome',
  templateUrl: './admissionhome.component.html',
  styleUrls: ['./admissionhome.component.css']
})
export class AdmissionhomeComponent implements OnInit {
  pa
  filteredStudents: Istudent[] = [];
  students: Istudent[] = [];

  constructor(private staffService: staffService) { }

  ngOnInit() {
    this.students = [
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      },
      {
        "studentId": 1,
        "studentName": "Merih",
        "Email": "merimemax@gmail.com",
        "emailStatus":"sent",
        "isAnswered": true,
        "result": "pass"
      }


    ]
    this.filteredStudents = this.students;
  }
}
