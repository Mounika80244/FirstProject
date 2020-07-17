import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from './detail';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  constructor(private http:HttpClient) { }
  _url="http://localhost:3000/employees";


  getValueEmployee(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url).
      pipe(catchError(this.handleError));
  }

 handleError(error:HttpErrorResponse){
  return Observable.throw(error.message||"server error");
}

}
