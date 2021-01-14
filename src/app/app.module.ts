import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { DataService } from './data.service';
import { ServeComponent } from './serve/serve.component';
import { LimitPipe } from './limit.pipe';
import { LoginComponent } from './login/login.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// import { MatErrorModule } from '@angular/material/error';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    routingComponent,
    EmployeesComponent,
    ServeComponent,
    LimitPipe,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    // MatErrorModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){}
 }

