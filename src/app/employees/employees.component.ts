import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from './employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: IEmployee[];
  myVal;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getEmployees()
      .subscribe((data: IEmployee[]) => {
        this.employees = data;
      });

    createData()
    {
      this._dataService.createData(this.employees)
        .subscribe(data => console.log(data))
    }
      deleteData(i){
      this._dataService.deleteData(this.employees)
      .subscribe(data => console.log(data))
      this.employees.splice(i,1)
      }

       editData(i){
        this.myVal=this.employees;
       this.employees.setValue({
         id:this.employees[i].id,
         name : this.employees[i].name
       })
     }

      updateData() {   
      this._dataService.updateData(this.myVal)
       .subscribe(data => console.log(data))
    }

  }
}
