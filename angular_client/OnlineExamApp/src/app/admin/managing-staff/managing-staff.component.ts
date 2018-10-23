import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService, TokenPayload } from 'src/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managing-staff',
  templateUrl: './managing-staff.component.html',
  styleUrls: ['./managing-staff.component.css']
})
export class ManagingStaffComponent implements OnInit {
  admissionstaff: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.admissionstaff = this.fb.group({
      fristname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      password: [''],
      hiredate: new Date()
    })
  }
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  register() {
    this.credentials.email = this.admissionstaff.value.fristname;
    this.credentials.name = this.admissionstaff.value.fristname + " " + this.admissionstaff.value.lastname;
    this.credentials.password = this.admissionstaff.value.password;

    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/admin');
    }, (err) => {
      console.error(err);
    });
  }

}
