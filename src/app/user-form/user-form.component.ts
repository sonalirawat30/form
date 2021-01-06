import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ageValidator } from '../custom-validator/age.validator';

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
      Name: [null, [Validators.required]],
      Email: [null, [Validators.required]],
      Mobile_No: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      age: [null, [Validators.required]],
      City: [null, [Validators.required]],
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

}
