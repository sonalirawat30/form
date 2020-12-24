import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EmployeesComponent } from './employees/employees.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //  constructor() {}
  //   getEmployees(){ 
  //     return [
  //     {"id":1,"name":"Shona","age":20},
  //     {"id":2,"name":"Shiva","age":24},
  //     {"id":3,"name":"Jyoti","age":23}
  // ];
  //   }}
  private _url: string = "/assets/example/emloyees.json";



  constructor(private http: HttpClient) {
    console.log(1)
  }
  getEmployees(): Observable<IEmployee[]> {
    console.log(2)

    return this.http.get<IEmployee[]>(this._url)

  }
};



