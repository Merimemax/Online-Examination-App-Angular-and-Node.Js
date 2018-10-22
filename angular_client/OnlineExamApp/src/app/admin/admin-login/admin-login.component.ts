import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private zone: NgZone, private auth: AuthenticationService) { } //

  ngOnInit(): void {
    this.admin = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberme: true
    });
  }


  credentials: TokenPayload = {
    email: "meetawet13@gmail.com",
    password: "123456"
  };


  logInAdmin() {
    this.credentials.email = this.admin.value.email;
    this.credentials.password = this.admin.value.password;

    console.log("email is recieved " + this.credentials.email);
    console.log("email is recieved " + this.credentials.password);

    this.auth.login(this.credentials).subscribe(() => {
      this.zone.run(() => this.router.navigate(['admin/home']));
    }, (err) => {
      console.error(err);
      console.log("emaa metkek")
    });
  }
}