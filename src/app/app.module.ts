import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { HomeComponent } from './Home/home.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent },
  {path: 'create', component: CreateEmployeesComponent },
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), BsDatepickerModule.forRoot(), BrowserAnimationsModule ],
  declarations: [
    AppComponent,
    HomeComponent, 
    ListEmployeesComponent, 
    CreateEmployeesComponent, 
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
