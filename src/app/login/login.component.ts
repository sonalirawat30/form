import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string;

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

}
