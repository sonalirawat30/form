import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
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
  private _url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
   getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url+ 'Employees')
    }
    deleteData(id: number):Observable<IEmployee[]> {  
      return this.http.delete<IEmployee[]>(this._url + 'Employees/' + id);  
    }  
    createData(employees):Observable<IEmployee[]> {  
      return this.http.post<any>(this._url+ 'Employees', employees)
      .pipe(
        retry(0)
        );;  
    }  
    getEmployeeById(id: number) {  
      return this.http.get<IEmployee[]>(this._url +id);  
    }  
    updateData(employees):Observable<any> {  
      return this.http.put(this._url + 'Employees/' + Number(employees.id), employees)
      .pipe(
        retry(0)
        );
  }
};

           

