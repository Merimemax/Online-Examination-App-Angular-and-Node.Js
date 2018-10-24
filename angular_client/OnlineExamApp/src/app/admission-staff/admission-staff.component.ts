import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Staff } from './staff';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from 'src/authentication.service';


@Component({
  // selector: 'app-admission-staff',
  templateUrl: './admission-staff.component.html',
  styleUrls: ['./admission-staff.component.css']
})
export class AdmissionStaffComponent implements OnInit {
  staff_credential: Staff;
  admissionStaff: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.admissionStaff = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberme: true
    });
  }

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  logInStaff() {
    this.credentials.email = this.admissionStaff.value.email;
    this.credentials.password = this.admissionStaff.value.password;

    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigate(['admissionhome']);
    }, (err) => {
      console.error(err);
      console.log("Invalid user!")
    });

  }

}
