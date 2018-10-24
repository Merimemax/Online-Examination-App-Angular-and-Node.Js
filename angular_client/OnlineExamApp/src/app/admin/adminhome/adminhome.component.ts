import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails, AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  user: string = "merih";

  constructor(private auth: AuthenticationService, private router: Router) { }
  ngOnInit() {

    this.user = window.localStorage.getItem('username');
    // this.auth.profile().subscribe(user => {
    // this.user = user.name;
    // }, (err) => {
    //   console.error(err);
    // });
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/admin'])
  }
}
