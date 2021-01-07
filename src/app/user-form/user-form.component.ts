import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pm-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  public myReactiveForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.signUpForm();
  }
  public onClick(): void {
    console.log(this.myReactiveForm);
  }

  public signUpForm(): void {
    this.myReactiveForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mobile_No: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      gender: 'female',
      age: '',
      city: [null, [Validators.required]],
      acceptTerms: [null, Validators.required]
    });
  }
  
  get f() {
    return this.myReactiveForm.controls;
  }
  public onSubmit(): void {
    this.submitted = true;
  }
  onReset() {
    this.submitted = false;
    this.myReactiveForm.reset();
  }
  setGender(key:string):void{
    const ageControl = this.myReactiveForm.get('age');
    if(key ==='male'){
      ageControl.setValidators(Validators.required);
    }
    else {
      ageControl.clearValidators();
    }
     ageControl.updateValueAndValidity();
    }
  }
