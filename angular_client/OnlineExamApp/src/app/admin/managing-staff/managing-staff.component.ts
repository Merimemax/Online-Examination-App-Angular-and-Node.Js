import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService, TokenPayload } from 'src/authentication.service';
import { Router } from '@angular/router';
import { AdmistaffService, IadmissionStaff } from './admistaff.service';

@Component({
  selector: 'app-managing-staff',
  templateUrl: './managing-staff.component.html',
  styleUrls: ['./managing-staff.component.css']
})
export class ManagingStaffComponent implements OnInit {
  admissionstaff: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router, private admistaff: AdmistaffService) { }

  ngOnInit() {
    this.admissionstaff = this.fb.group({
      fristname: [''],
      lastname: [''],
      email: [''],
      username: ['*******'],
      password: ['*******'],
      hiredate: new Date()
    })
  }
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  newAdmissonStaff: IadmissionStaff = {
    fristname: "",
    lastname: "",
    email: "",
    username: "********",
    password: "********",
    hiredate: new Date()

  }

  register() {
    this.credentials.email = this.admissionstaff.value.email;
    this.credentials.name = this.admissionstaff.value.fristname + " " + this.admissionstaff.value.lastname;
    this.credentials.password = this.admissionstaff.value.password;

    this.newAdmissonStaff.fristname = this.admissionstaff.value.fristname;
    this.newAdmissonStaff.lastname = this.admissionstaff.value.lastname;
    this.newAdmissonStaff.email = this.admissionstaff.value.email;

    this.admistaff.createAdmissionStaff(this.newAdmissonStaff);

    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/admin/home/managestaff');
    }, (err) => {
      console.error(err);
    });
  }

}
