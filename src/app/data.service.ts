import { Injectable } from '@angular/core';
 import { HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
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
    private _url:string="/assets/example/employees.json";

    constructor(private http:HttpClient) { }
     getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
   }
  }

 
