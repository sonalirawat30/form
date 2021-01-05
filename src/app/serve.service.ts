import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServe } from  './serve';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  constructor(private http:HttpClient) { }
  getData(): Observable<IServe[]> {
    return this.http.get<IServe[]>('https://jsonplaceholder.typicode.com/albums');
  }

}
