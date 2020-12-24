import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']     
})
export class EmployeesComponent implements OnInit {
  public employees = [];

  constructor(private _dataService:DataService) { }

  ngOnInit():void {

    console.log('Reading local json files');
    console.log("employees");

      //this.employees = this._dataService.getEmployees();
       this._dataService.getEmployees()
           .subscribe(data => this.employees = data);
  
  }

  



}
