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
  userName: string;
  userAge: number;
  editUserDetails: any;
  updatedUserName = '';
  updatedUserAge = '';
  updateUserId = '';

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployess()
    //  this.employees =  [
    //     {"id":1,"name":"Shona","age":20,"email":"sri"},
    //     {"id":2,"name":"Shiva","age":24,"email":"nivas"},
    //     {"id":3,"name":"Jyoti","age":23,"email":"neelam"}
    // ]
  }
  getEmployess() {
    this._dataService.getEmployees()
      .subscribe((data) => {
        this.employees = data;
      });
  }

  createData() {
    let data = {

      "id": Date.now(),
      "name": this.userName,
      "age": this.userAge

    }
    this._dataService.createData(this.employees)
      .subscribe((res) => {
        console.log(res)
        this.getEmployess()
      })
  }
  deleteData(id) {
    this._dataService.deleteData(id)
      .subscribe(data => console.log(data))
    this.employees.splice(id, 1)
  }

  editData(i) {
    this.myVal = this.employees[i];
    this.employees.setValue({
      id: this.employees[i].id,
      name: this.employees[i].name
    })
  }

  editUser(employee) {
    this.updateUserId = employee?.id;
    this.updatedUserName = employee?.name;
    this.updatedUserAge = employee?.age;
  }

  updateUser() {
    let updatedUser = { id: this.updateUserId, name: this.updatedUserName, age: this.updatedUserAge }
    this._dataService.updateData(updatedUser).subscribe(res => { console.log(res) })
    //  this.updateUserId = '';
    //   this.updatedUserName = '';
    //   this.updatedUserAge = '';
    this.getEmployess();

  }

  updateData() {
    this._dataService.updateData(this.myVal)
      .subscribe(data => console.log(data))
  }

}

