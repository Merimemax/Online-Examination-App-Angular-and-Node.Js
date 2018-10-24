import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';//taps to the observable stream and 
// allows us to look into the immidate value in the stream with out transforming also uses for debuging


import { Istudent } from './Istudent';

@Injectable({
  providedIn: 'root'
})
export class staffService {
  //qqqqq
  private studentUrl = 'api/students/students.json';

  constructor(private http: HttpClient) { }
  
  getStudents(): Observable<Istudent[]> {
    return this.http.get<Istudent[]>(this.studentUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getStudent(id: number): Observable<Istudent | undefined> {
    return this.getStudents().pipe(
      map((students: Istudent[]) => students.find(p => p.studentId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
