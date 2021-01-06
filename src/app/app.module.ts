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
import { AgeValidator } from './custom-validator/age.validator';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    routingComponent,
    EmployeesComponent,
    ServeComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule,
    AgeValidator
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){}
 }

