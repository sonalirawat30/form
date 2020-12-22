import { Routes ,RouterModule} from '@angular/router';
import {NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { UserFormComponent } from './user-form/user-form.component';
const routes:Routes = [
    {path:'',redirectTo:'formvalidation',pathMatch:'full'},
    {path:'formvalidation' ,component:FormValidationComponent},
    {path:'userform' ,component:UserFormComponent},
    {path:'userdetail',loadChildren:'/user-detail'},
    {path:'**' ,component:PageNotFoundComponent },
    {path: 'student', loadChildren: './student/student.module#StudentModule'}
];
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [FormValidationComponent,UserFormComponent,PageNotFoundComponent]
  