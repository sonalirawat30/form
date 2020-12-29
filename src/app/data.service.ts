import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {}
   getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    }
    deleteData(id: number):Observable<IEmployee[]> {  
      return this.http.delete<IEmployee[]>(this._url + id);  
    }  
    createData(employees):Observable<IEmployee[]> {  
      return this.http.post<IEmployee[]>(this._url, employees);  
    }  
    getEmployeeById(id: number) {  
      return this.http.get<IEmployee[]>(this._url +id);  
    }  
    updateData(employees) {  
      return this.http.put(this._url + employees.id, employees);  
  }
};

           

