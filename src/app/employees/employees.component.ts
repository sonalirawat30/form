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
    this.getEmployee()
    //  this.employees =  [
    //     {"id":1,"name":"Shona","age":20,"email":"sri"},
    //     {"id":2,"name":"Shiva","age":24,"email":"nivas"},
    //     {"id":3,"name":"Jyoti","age":23,"email":"neelam"}
    // ]
    }
    getEmployee(){
      this._dataService.getEmployees()
      .subscribe((data) => {
        this.employees = data;
      });
    }

    createData()
    { 
        this._dataService.createData(this.employees)
        .subscribe((res) => {console.log(res)
          this.getEmployee()
        })
    }
      deleteData(i){
      this._dataService.deleteData(i)
      .subscribe(data => console.log(data))
       this.employees.splice(i,1)
      }

      editData(i){
        this.myVal=this.employees;
        this.employees.setValue({
          id:this.employees[i].id,
          name:this.employees[i].name
      })
     }
 
      updateData() {   
      this._dataService.updateData(this.myVal)
       .subscribe(data => console.log(data))
    }

  }

