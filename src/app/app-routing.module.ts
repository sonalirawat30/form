import { Routes ,RouterModule} from '@angular/router';
import {NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes:Routes = [
    {path: '',redirectTo :'/userdetail', pathMatch:'full'},
    {path:' userdetail' ,component:UserDetailComponent},
    {path:'formvalidation' ,component:FormValidationComponent},
    {path:'**' ,component:PageNotFoundComponent }
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]
})

export class AppRoutingModule { }
export const routingComponent = [UserDetailComponent,FormValidationComponent,PageNotFoundComponent]
  