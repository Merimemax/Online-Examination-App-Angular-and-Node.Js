import { Component, OnInit } from '@angular/core';
import { staffService } from '../admission.service';
import { Istudent } from '../Istudent';
import { AdmissionstaffDBService } from '../admissionstaff-db.service';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';
import { AuthenticationService } from 'src/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admissionhome',
  templateUrl: './admissionhome.component.html',
  styleUrls: ['./admissionhome.component.css']
})
export class AdmissionhomeComponent implements OnInit {
  pageTitle = 'Student-Record';
  filteredStudents;
  students: Istudent[] = [];

  constructor(private staffService: staffService, private adstaffDB: AdmissionstaffDBService,
    private emailService: EmailService, private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.students = this.adstaffDB.getStudents();
    this.filteredStudents = this.students;
  }

  sendEmail(email) {
    this.emailService.sendExamEmailAdress(email);
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/admissionstaff'])
  }
}
