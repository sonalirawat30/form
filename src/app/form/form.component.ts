import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
myReactiveForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      Name:new FormControl(null),
      Email:new FormControl(null),
      Mobile_No:new FormControl(null),
      Password:new FormControl(null),
      confirmPassword:new FormControl(null),
      phone:new FormControl(null),
      Gender:new FormControl(null),
      city:new FormControl(null),
    });
  }
  onSubmit(){
      console.log(this.myReactiveForm)
  }
}