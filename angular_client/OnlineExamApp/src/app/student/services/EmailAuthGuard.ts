import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class EmailAuthGuard implements CanActivate {
 
    constructor(private router: Router,private http:HttpClient) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.http.get('http://localhost:8000/api/takexam',{
            params: {
              email: route.queryParams.email,
              }}).subscribe(data=>{
                  

              },err=>{

              });

      //  this.router.navigate(['/exam'], { queryParams: { email: route.queryParams.email }});
        return false;
        // this.http.get(`http://localhost:8000/exam`,{
        //     params: {
        //       email: route.queryParams.email,
        //       }}).subscribe(data=>{
        //           return true;

        //       },err=>{

        //       });



        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }
 
        // // not logged in so redirect to login page
        // this.router.navigate(['/exam'], { queryParams: { returnUrl: state.url }});
        // return false;
    }

   
    }