import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServe } from './serve';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  constructor(private http:HttpClient) { }
  getData(serve): Observable<IServe[]> {
    return this.http.get<IServe[]>('http://localhost:3000/serve');
  }
}
