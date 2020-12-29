import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees;
  myVal;
  userName:string;
  userEmail:string;
  userAge:number;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getEmployees()
      .subscribe((data) => {
        this.employees = data;
      });
    //  this.employees =  [
    //     {"id":1,"name":"Shona","age":20,"email":"sri"},
    //     {"id":2,"name":"Shiva","age":24,"email":"nivas"},
    //     {"id":3,"name":"Jyoti","age":23,"email":"neelam"}
    // ]
    }

    createData()
    {
      let employeeLength = this.employees.length;
      let id = employeeLength + 1
      this.employees.push({id:id,name:this.userName,age:this.userAge})
      // this._dataService.createData({id:4,name:this.userName,age:35,email:this.userEmail})
      //   .subscribe(data => console.log(data))
    }
      deleteData(i){
      this._dataService.deleteData(i)
      .subscribe(data => console.log(data))
      this.employees.splice(i,1)
      }

    //    editData(i){
    //     this.myVal=this.employees;
    //     this.employees.
    //    this.employees({
    //      id:this.employees[i].id,
    //      name : this.employees[i].name
    //    })
    //  }

      updateData() {   
      this._dataService.updateData(this.myVal)
       .subscribe(data => console.log(data))
    }

  }

