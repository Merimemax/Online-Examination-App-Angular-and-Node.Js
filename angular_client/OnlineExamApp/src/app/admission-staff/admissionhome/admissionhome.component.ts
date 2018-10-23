import { Component, OnInit } from '@angular/core';
import { staffService } from '../admission.service';
import { Istudent } from '../Istudent';
import { AdmissionstaffDBService } from '../admissionstaff-db.service';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-admissionhome',
  templateUrl: './admissionhome.component.html',
  styleUrls: ['./admissionhome.component.css']
})
export class AdmissionhomeComponent implements OnInit {
  pageTitle='Student-Record';
  filteredStudents;
  students: Istudent[] = [];

  constructor(private staffService: staffService, private adstaffDB: AdmissionstaffDBService, private emailService: EmailService) {
  
  }

  ngOnInit() {
    this.students = this.adstaffDB.getStudents();
    this.filteredStudents = this.students;
  }

  sendEmail(email){
    this.emailService.sendExamEmailAdress(email);
  }
}
