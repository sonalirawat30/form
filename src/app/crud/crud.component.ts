import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public employees;
  myVal;
  userName:string;
  userEmail:string;
  userAge:number;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployess()
    //  this.employees =  [
    //     {"id":1,"name":"Shona","age":20,"email":"sri"},
    //     {"id":2,"name":"Shiva","age":24,"email":"nivas"},
    //     {"id":3,"name":"Jyoti","age":23,"email":"neelam"}
    // ]
    }
    getEmployess(){
      this._employeesService.getEmployees()
      .subscribe((data) => {
        this.employees = data;
      });
    }

    createData()
    { 
        this._employeesService.createData(this.employees)
        .subscribe((res) => {console.log(res)
          this.getEmployess()
        })
    }
      deleteData(i){
      this._employeesService.deleteData(i)
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
      this._employeesService.updateData(this.myVal)
       .subscribe(data => console.log(data))
    }

  }

